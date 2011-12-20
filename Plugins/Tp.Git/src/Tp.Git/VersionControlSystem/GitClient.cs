﻿// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using System;
using System.Collections.Generic;
using System.Linq;
using NGit;
using NGit.Revwalk;
using NGit.Revwalk.Filter;
using NGit.Transport;
using StructureMap;
using Tp.Integration.Plugin.Common.Domain;
using Tp.SourceControl.Settings;
using Tp.SourceControl.VersionControlSystem;

namespace Tp.Git.VersionControlSystem
{
	public class GitClient
	{
		private readonly NGit.Api.Git _git;

		public GitClient(NGit.Api.Git git)
		{
			_git = git;
		}

		public IEnumerable<RevisionRange> GetFromTillHead(RevisionId @from, int pageSize)
		{
			var revWalk = CreateRevWalker();

			try
			{
				var filter = ApplyNoMergesFilter(CommitTimeRevFilter.After(((GitRevisionId) @from).Value));
				revWalk.SetRevFilter(filter);

				var commits = (from revision in revWalk orderby revision.CommitTime ascending select revision).ToArray().Split(pageSize);

				var fromTillHead = commits.Select(x => new RevisionRange(x.First().CommitTime.ToString(), x.Last().CommitTime.ToString())).ToArray();
				return fromTillHead;
			}
			finally
			{
				revWalk.Dispose();
			}
		}

		private static RevFilter ApplyNoMergesFilter(RevFilter filter)
		{
			return AndRevFilter.Create(new[] {RevFilter.NO_MERGES, filter});
		}

		public IEnumerable<RevisionRange> GetAfterTillHead(RevisionId revisionId, int pageSize)
		{
			GitRevisionId addSeconds = ((GitRevisionId) revisionId).Value.AddSeconds(1);
			return GetFromTillHead(addSeconds, pageSize);
		}

		private RevWalk CreateRevWalker()
		{
			var repository = _git.GetRepository();
			try
			{
				var revWalk = new RevWalk(repository);

				foreach (var reference in repository.GetAllRefs())
				{
					revWalk.MarkStart(revWalk.ParseCommit(reference.Value.GetObjectId()));
				}
				return revWalk;
			}
			finally
			{
				repository.Close();
			}
		}

		public string[] RetrieveAuthors(GitRevisionId @from, GitRevisionId to)
		{
			var revWalk = CreateRevWalker();
			revWalk.SetRevFilter(CommitTimeRevFilter.Between(from.Value.GetTime(), to.Value.GetTime()));

			var commits = revWalk.ToArray();

			return (from revision in commits select revision.GetAuthorIdent().GetName()).Distinct().ToArray();
		}

		public RevisionInfo[] GetRevisions(RevisionId fromChangeset, RevisionId toChangeset)
		{
			var revWalk = CreateRevWalker();
			try
			{
				RevFilter betweenFilter = CommitTimeRevFilter.Between(((GitRevisionId) fromChangeset).Value, ((GitRevisionId) toChangeset).Value);

				revWalk.SetRevFilter(ApplyNoMergesFilter(betweenFilter));
				var commits = revWalk.ToArray();
				return commits.Select(commit => commit.ConvertToRevisionInfo(_git.GetRepository())).ToArray();
			}
			finally
			{
				revWalk.Dispose();
			}
		}

		~GitClient()
		{
			BatchingProgressMonitor.ShutdownNow();
		}

		public IEnumerable<RevisionRange> GetFromAndBefore(RevisionId @from, RevisionId to, int pageSize)
		{
			var revWalk = CreateRevWalker();
			try
			{
				var filter = CommitTimeRevFilter.Between(((GitRevisionId) from).Value.AddSeconds(1), ((GitRevisionId) to).Value.AddSeconds(-1));
				revWalk.SetRevFilter(ApplyNoMergesFilter(filter));

				var commits = (from revision in revWalk orderby revision.CommitTime ascending select revision).ToArray().Split(pageSize);
				var fromTillHead = commits.Select(x => new RevisionRange(x.First().CommitTime.ToString(), x.Last().CommitTime.ToString())).ToArray();
				return fromTillHead;
			}
			finally
			{
				revWalk.Dispose();
			}
		}

		public static GitClient Connect(ISourceControlConnectionSettingsSource settings)
		{
			var repositoryFolder = GetLocalRepository(settings);
			if (IsRepositoryUriChanged(repositoryFolder, settings))
			{
				repositoryFolder.Delete();
				repositoryFolder = GitRepositoryFolder.Create(settings.Uri);
				var repoFolderStorage = Repository.Get<GitRepositoryFolder>();
				repoFolderStorage.ReplaceWith(repositoryFolder);
			}

			NGit.Api.Git nativeGit;
			try
			{
				var credentialsProvider = new UsernamePasswordCredentialsProvider(settings.Login, settings.Password);
				if (repositoryFolder.Exists())
				{
					nativeGit = NGit.Api.Git.Open(repositoryFolder.Value);
					nativeGit.Clean().Call();
					nativeGit.Fetch().SetCredentialsProvider(credentialsProvider).SetRemoveDeletedRefs(true).Call();
				}
				else
				{
					nativeGit = NGit.Api.Git.CloneRepository()
						.SetURI(settings.Uri)
						.SetNoCheckout(true)
						.SetCredentialsProvider(credentialsProvider)
						.SetDirectory(repositoryFolder.Value).Call();
				}
			}
			catch (ArgumentNullException exception)
			{
				throw new ArgumentException(GitCheckConnectionErrorResolver.INVALID_URI_OR_INSUFFICIENT_ACCESS_RIGHTS_ERROR_MESSAGE, exception);
			}
			return new GitClient(nativeGit);
		}

		private static bool IsRepositoryUriChanged(GitRepositoryFolder repositoryFolder, ISourceControlConnectionSettingsSource settings)
		{
			return (settings.Uri.ToLower() != repositoryFolder.RepoUri.ToLower()) && repositoryFolder.Exists();
		}

		private static IStorageRepository Repository
		{
				get { return ObjectFactory.GetInstance<IStorageRepository>(); }
		}

		private static GitRepositoryFolder GetLocalRepository(ISourceControlConnectionSettingsSource settings)
		{
				var repoFolderStorage = Repository.Get<GitRepositoryFolder>();
				if (repoFolderStorage.Empty())
				{
						var repositoryFolder = GitRepositoryFolder.Create(settings.Uri);
						repoFolderStorage.ReplaceWith(repositoryFolder);
						return repositoryFolder;
				}

				return repoFolderStorage.Single();
		}
	}
}
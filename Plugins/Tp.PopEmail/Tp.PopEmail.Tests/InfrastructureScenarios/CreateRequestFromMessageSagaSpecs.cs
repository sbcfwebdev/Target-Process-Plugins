// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NBehave.Narrator.Framework;
using NServiceBus.Saga;
using NUnit.Framework;
using StructureMap;
using Tp.Integration.Common;
using Tp.Integration.Messages.EntityLifecycle;
using Tp.Integration.Messages.EntityLifecycle.Commands;
using Tp.Integration.Messages.EntityLifecycle.Messages;
using Tp.Integration.Plugin.Common.SagaPersister;
using Tp.Integration.Testing.Common.Persisters;
using Tp.PopEmailIntegration.Initialization;
using Tp.PopEmailIntegration.Rules;
using Tp.Testing.Common.NBehave;
using Tp.Testing.Common.NUnit;

namespace Tp.PopEmailIntegration.InfrastructureScenarios
{
	[TestFixture, ActionSteps]
	public class CreateRequestFromMessageSagaSpecs : PopEmailIntegrationContext
	{
		private MessageDTO _message;
		private List<AttachmentDTO> _attachments;
		private const int REQUEST_ID = 10;

		[BeforeScenario]
		public void OnBeforeScenario()
		{
			Transport.On<CreateCommand>(x => x.Dto is RequestDTO).Reply(
				message => new RequestCreatedMessage {Dto = new RequestDTO {ID = 10}});
			Transport.On<AttachGeneralUserToRequestCommand>().Reply(
				message => new GeneralUserAttachedToRequestMessage {RequestId = REQUEST_ID, RequesterId = _message.FromID});
			Transport.On<AttachMessageToGeneralCommand>().Reply(
				message => new MessageAttachedToGeneralMessage {GeneralId = REQUEST_ID, MessageId = _message.FromID});
			Transport.On<UpdateCommand>(x => x.Dto is MessageDTO).Reply(
				message => new MessageUpdatedMessage {ChangedFields = new[] {MessageField.IsProcessed}});
			Transport.On<CreateCommand>(x => x.Dto is AttachmentDTO).Reply(
				message =>
				new AttachmentCreatedMessage
				{Dto = new AttachmentDTO {ID = 11, OriginalFileName = ((AttachmentDTO) message.Dto).OriginalFileName}});

			_attachments = new List<AttachmentDTO>();
		}

		[Test]
		public void ShouldCreateRequestFromMessage()
		{
			@"Given message 2 with subject 'Subject'
					And the message is from user with id 100
					And the message has body 'Description'
				When CreateRequestFromMessageCommand with project 1 and the message received
				Then Request should be created
					And the request should have description 'Description'
					And the request should have project 1
					And the request should have owner 100
					And the request should have source type email
					And the request should be private
					And requester with id 100 should be attached to the request
					And the request should be attached to message 2
					And message 2 should be marked as processed
			"
				.Execute();
		}

		[Test]
		public void ShouldCreateRequestWithAttachmentsFromMessage()
		{
			@"Given message 2 with subject 'Subject'
					And the message is from user with id 100
					And the message has attachment 'file1'
					And the message has attachment 'file2'
				When CreateRequestFromMessageCommand with project 1 and the message received
				Then Request should be created
					And the request should have attachment 'file1'
					And the request should have attachment 'file2'
					And message 2 should be marked as processed
			"
				.Execute();
		}

		[Given("message $messageId with subject '$subject'")]
		public void CreateMessage(int messageId, string subject)
		{
			_message = new MessageDTO {MessageID = messageId, Subject = subject};
		}

		[Given("the message is from user with id $userId")]
		public void MessageIsFromUser(int userId)
		{
			_message.FromID = userId;
			Transport.HandleMessageFromTp(new UserCreatedMessage {Dto = new UserDTO {UserID = userId, Email = Guid.NewGuid().ToString()}});
		}

		[Given("the message has body '$body'")]
		public void MessageHasDescription(string body)
		{
			_message.Body = body;
		}

		[Given("the message has attachment '$attachmentFileName'")]
		public void MessageHasAttachment(string attachmentFileName)
		{
			_attachments.Add(new AttachmentDTO {OriginalFileName = attachmentFileName});
		}

		[When("CreateRequestFromMessageCommand with project $projectId and the message received")]
		public void CreateRequestFromMessageCommandReceived(int projectId)
		{
			Transport.HandleLocalMessage(Storage,
			                             new CreateRequestFromMessageCommand
			                             {MessageDto = _message, ProjectId = projectId, Attachments = _attachments.ToArray()});
		}

		[Then("Request should be created")]
		public void RequestShouldBeCreated()
		{
			Transport.TpQueue.GetMessages<CreateCommand>().Where(x => x.Dto is RequestDTO).Count().Should(Be.EqualTo(1));
		}

		[Then("the request should have description '$description'")]
		public void RequestShouldHaveDescription(string description)
		{
			RequestDto().Description.Should(Be.EqualTo(description));
		}

		[Then("the request should have project $projectId")]
		public void RequestShouldHaveProject(int projectId)
		{
			RequestDto().ProjectID.Should(Be.EqualTo(projectId));
		}

		[Then("the request should have owner $ownerId")]
		public void RequestShouldHaveOwner(int ownerId)
		{
			RequestDto().OwnerID.Should(Be.EqualTo(ownerId));
		}

		[Then("the request should have source type email")]
		public void RequestShouldHaveEmailSourceType()
		{
			RequestDto().SourceType.Should(Be.EqualTo(RequestSourceEnum.Email));
		}

		[Then("the request should be private")]
		public void RequestShouldBePrivate()
		{
			RequestDto().IsPrivate.Should(Be.True);
		}

		[Then("requester with id $requesterId should be attached to the request")]
		public void RequesterShouldBeAttachedToRequest(int requesterId)
		{
			var command = Transport.TpQueue.GetMessages<AttachGeneralUserToRequestCommand>().First();
			command.RequesterId.Should(Be.EqualTo(requesterId));
			command.RequestId.Should(Be.EqualTo(REQUEST_ID));
		}

		[Then("the request should be attached to message $messageId")]
		public void RequestShouldBeAttachedToMessage(int messageId)
		{
			var command = Transport.TpQueue.GetMessages<AttachMessageToGeneralCommand>().First();
			command.MessageId.Should(Be.EqualTo(messageId));
			command.GeneralId.Should(Be.EqualTo(REQUEST_ID));
		}

		[Then("message $messageId should be marked as processed")]
		public void MessageShouldBeMarkedAsProcessed(int messageId)
		{
			var command = Transport.TpQueue.GetMessages<UpdateCommand>().Where(x => x.Dto is MessageDTO).First();
			command.ChangedFields.Should(Be.EquivalentTo(new[] {MessageField.IsProcessed.ToString()}));
			((MessageDTO) command.Dto).IsProcessed.Should(Be.True);
			ObjectFactory.GetInstance<TpInMemorySagaPersister>().Get<ISagaEntity>().Where(x => !(x is NewEmailProfileInitializationSagaData)).Count().Should(
				Be.EqualTo(0), "Saga is not completed");
		}

		[Then("the request should have attachment '$attachmentFileName'")]
		public void RequestShouldHaveAttachment(string attachmentFileName)
		{
			Transport.TpQueue.GetMessages<CreateCommand>().Where(
				x => x.Dto is AttachmentDTO && ((AttachmentDTO) x.Dto).OriginalFileName == attachmentFileName).First().Should(
					Be.Not.Null);
		}

		private RequestDTO RequestDto()
		{
			return
				Transport.TpQueue.GetMessages<CreateCommand>().Where(x => x.Dto is RequestDTO).Select(x => x.Dto as RequestDTO).
					First();
		}
	}
}
// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using NBehave.Narrator.Framework;
using NUnit.Framework;
using Tp.MashupManager.CustomCommands;
using Tp.Testing.Common.NBehave;

namespace Tp.MashupManager.Tests.Mashups.CRUD
{
	[ActionSteps, TestFixture]
	public class UpdateMashupSpecs : MashupManagerTestBase
	{
		[Test]
		public void ShouldUpdateMashup()
		{
			@"
				Given profile created
					And profile mashups are: mashup1, mashup2
				When handle UpdateMashupCommand command with args '{""Name"":""mashup1"", ""OldName"":""mashup1"", ""Placeholders"":""Default, NewPlaceholder"", ""Script"":""alert(1234567)""}'
				Then 1 mashups should be sent to TP
					And mashup 'mashup1' with placeholders 'Default, NewPlaceholder' and script 'alert(1234567)' should be sent to TP
					And 2 mashup should be in profile storage
					And mashup 'mashup1' with placeholders 'Default, NewPlaceholder' and script 'alert(1234567)' should be in profile storage
					And default mashup 'mashup2' should be in profile storage
			".Execute();
		}

		[Test]
		public void ShouldUpdateMashupForAccount()
		{
			@"
				Given profile created for account 'Account1'
					And profile mashups are: mashup1, mashup2
				When handle UpdateMashupCommand command with args '{""Name"":""mashup1"", ""OldName"":""mashup1"", ""Placeholders"":""Default, NewPlaceholder"", ""Script"":""alert(1234567)""}'
				Then 1 mashups should be sent to TP
					And mashup 'Account1 mashup1' with accounts 'Account1' and placeholders 'Default, NewPlaceholder' and script 'alert(1234567)' should be sent to TP
					And 2 mashup should be in profile storage
					And mashup 'mashup1' with placeholders 'Default, NewPlaceholder' and script 'alert(1234567)' should be in profile storage
					And default mashup 'mashup2' should be in profile storage
			".Execute();
		}

		[Test]
		public void ShouldUpdateMashupWhenNameChanged()
		{
			@"
				Given profile created
					And profile mashups are: mashup1, mashup2
				When handle UpdateMashupCommand command with args '{""Name"":""mashup3"", ""OldName"":""mashup1"", ""Placeholders"":""Default, NewPlaceholder"", ""Script"":""alert(1234567)""}'
				Then 2 mashups should be sent to TP
					And mashup 'mashup1' should be cleared in TP and profile
					And mashup 'mashup3' with placeholders 'Default, NewPlaceholder' and script 'alert(1234567)' should be sent to TP
					And 2 mashup should be in profile storage
					And mashup 'mashup3' with placeholders 'Default, NewPlaceholder' and script 'alert(1234567)' should be in profile storage
					And default mashup 'mashup2' should be in profile storage
			".Execute();
		}

		[Test]
		public void ShouldUpdateMashupForAccountWhenNameChanged()
		{
			@"
				Given profile created for account 'Account1'
					And profile mashups are: mashup1, mashup2
				When handle UpdateMashupCommand command with args '{""Name"":""mashup3"", ""OldName"":""mashup1"", ""Placeholders"":""Default, NewPlaceholder"", ""Script"":""alert(1234567)""}'
				Then 2 mashups should be sent to TP
					And mashup 'Account1 mashup1' should be cleared in TP
					And mashup 'mashup1' should be cleared in profile
					And mashup 'Account1 mashup3' with accounts 'Account1' and placeholders 'Default, NewPlaceholder' and script 'alert(1234567)' should be sent to TP
					And 2 mashup should be in profile storage
					And mashup 'mashup3' with placeholders 'Default, NewPlaceholder' and script 'alert(1234567)' should be in profile storage
					And default mashup 'mashup2' should be in profile storage
			".Execute();
		}

		[Test]
		public void ShouldNotUpdateWhenUpdatedNameAlredyExists()
		{
			@"
				Given profile created
					And profile mashups are: mashup1, mashup2
				When handle UpdateMashupCommand command with args '{""Name"":""mashup2"", ""OldName"":""mashup1"", ""Placeholders"":""Default, NewPlaceholder"", ""Script"":""alert(1234567)""}'
				Then 0 mashups should be sent to TP
					And command should return validation error for 'Name' field 'Mashup with the same name already exists'
					And 2 mashup should be in profile storage
					And default mashup 'mashup1' should be in profile storage
					And default mashup 'mashup2' should be in profile storage
			".Execute();
		}

		[Test]
		public void ShouldNotUpdateWhenUpdatedNameAlredyExistsUseWhitespaces()
		{
			@"
				Given profile created
					And profile mashups are: mashup1, mashup2
				When handle UpdateMashupCommand command with args '{""Name"":"" mashup2 "", ""OldName"":""mashup1"", ""Placeholders"":""Default, NewPlaceholder"", ""Script"":""alert(1234567)""}'
				Then 0 mashups should be sent to TP
					And command should return validation error for 'Name' field 'Mashup with the same name already exists'
					And 2 mashup should be in profile storage
					And default mashup 'mashup1' should be in profile storage
					And default mashup 'mashup2' should be in profile storage
			".Execute();
		}

		[Test]
		public void ShouldNotUpdateMashupIfNameContainsInvalidChars()
		{
			@"
				Given profile created
					And profile mashups are: mashup1
				When handle UpdateMashupCommand command with args '{""Name"":""mashup%^&"", ""OldName"":""mashup1"", ""Placeholders"":""Default"", ""Script"":""alert(123)""}'
				Then 0 mashups should be sent to TP
					And command should return validation error for 'Name' field 'You can only use letters, numbers, space and underscore symbol in Mashup name'
			".Execute();
		}

		[When("handle UpdateMashupCommand command with args '$args'")]
		public void HandleUpdateMashupCommand(string args)
		{
			var command = new UpdateMashupCommand();
			_response = command.Execute(args);
		}
	}
}
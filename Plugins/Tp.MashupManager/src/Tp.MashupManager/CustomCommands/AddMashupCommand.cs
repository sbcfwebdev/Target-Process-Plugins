// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using Tp.Integration.Plugin.Common.Validation;
using Tp.MashupManager.Dtos;

namespace Tp.MashupManager.CustomCommands
{
	public class AddMashupCommand : CrudMashupCommand<MashupDto>
	{
		protected override PluginProfileErrorCollection ExecuteOperation(MashupDto mashup)
		{
			return MashupRepository.Add(mashup);
		}

		public override string Name
		{
			get { return "AddMashup"; }
		}
	}
}
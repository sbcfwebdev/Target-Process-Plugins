﻿//-----------------------------------------------------------------------------
// This code was generated by a tool.
// Changes to this file will be lost if the code is regenerated.
//-----------------------------------------------------------------------------
using System;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
    /// <summary>
    /// Data Transfer object of Severity. Represents Severity (measure of injuriousness) of the bug. For example, Blocking, Critical, Small..
    /// </summary>
	[Serializable]
	public partial class SeverityDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return SeverityID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				SeverityID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Severity ID.
        /// </summary>
        /// <value>The Severity ID.</value>
		[PrimaryKey]
		public int? SeverityID { get; set; }
		

		/// <summary>
        /// Gets or sets the Name. Severity name. For example: Blocking
        /// </summary>
        /// <value>The Name.</value>
		public String Name { get; set; }

		/// <summary>
        /// Gets or sets the Importance. Defines severity importance. Minimal value is highest importance
        /// </summary>
        /// <value>The Importance.</value>
		public Int32? Importance { get; set; }

		/// <summary>
        /// Gets or sets the Is Default. Indicates wheather it is default severity
        /// </summary>
        /// <value>The Is Default.</value>
		public Boolean? IsDefault { get; set; }
		

		
	}
	
	
	/// <summary>
    /// Severity fields
    /// </summary>
	public enum SeverityField
	{
        /// <summary>
        /// Name
        /// </summary>		
		Name,
        /// <summary>
        /// Importance
        /// </summary>		
		Importance,
        /// <summary>
        /// Is Default
        /// </summary>		
		IsDefault,
	}
}
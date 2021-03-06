//-----------------------------------------------------------------------------
// This code was generated by a tool.
// Changes to this file will be lost if the code is regenerated.
//-----------------------------------------------------------------------------
using System;
using System.Xml.Serialization;using System.Runtime.Serialization;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
	/// <summary>
	/// Data Transfer object of Role. Represents Role in the system. TargetProcess has role-based permissions. Each user can have specific role in each project, thus having specific access..
	/// </summary>
	[Serializable][DataContract]
	public partial class RoleDTO : DataTransferObject
	{
		/// <summary>
		/// Gets or sets the ID.
		/// </summary>
		/// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return RoleID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				RoleID = value;
			}
		}

		/// <summary>
		/// Gets or sets the Role ID.
		/// </summary>
		/// <value>The Role ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? RoleID { get; set; }
		

		/// <summary>
		/// Gets or sets the Name. Role name
		/// </summary>
		/// <value>The Name.</value>
		[DataMember][XmlElement(Order = 4)]public String Name { get; set; }

		/// <summary>
		/// Gets or sets the Description. Brief role description
		/// </summary>
		/// <value>The Description.</value>
		[DataMember][XmlElement(Order = 5)]public String Description { get; set; }

		/// <summary>
		/// Gets or sets the Time Sheet Access. Time Sheet Access
		/// </summary>
		/// <value>The Time Sheet Access.</value>
		[DataMember][XmlElement(Order = 6)]public Boolean? TimeSheetAccess { get; set; }

		/// <summary>
		/// Gets or sets the People Access. 
		/// </summary>
		/// <value>The People Access.</value>
		[DataMember][XmlElement(Order = 7)]public Boolean? PeopleAccess { get; set; }

		/// <summary>
		/// Gets or sets the Personal Email Access. 
		/// </summary>
		/// <value>The Personal Email Access.</value>
		[DataMember][XmlElement(Order = 8)]public Boolean? PersonalEmailAccess { get; set; }

		/// <summary>
		/// Gets or sets the Pair. 
		/// </summary>
		/// <value>The Pair.</value>
		[DataMember][XmlElement(Order = 9)]public Boolean? Pair { get; set; }

		/// <summary>
		/// Gets or sets the Have Effort. 
		/// </summary>
		/// <value>The Have Effort.</value>
		[DataMember][XmlElement(Order = 10)]public Boolean? HaveEffort { get; set; }
		

		
	}
}

namespace Tp.Integration.Common
{
	/// <summary>
    /// Role fields
    /// </summary>
	public enum RoleField
	{
        /// <summary>
        /// Name
        /// </summary>		
		Name,
        /// <summary>
        /// Description
        /// </summary>		
		Description,
        /// <summary>
        /// Time Sheet Access
        /// </summary>		
		TimeSheetAccess,
        /// <summary>
        /// People Access
        /// </summary>		
		PeopleAccess,
        /// <summary>
        /// Personal Email Access
        /// </summary>		
		PersonalEmailAccess,
        /// <summary>
        /// Pair
        /// </summary>		
		Pair,
        /// <summary>
        /// Have Effort
        /// </summary>		
		HaveEffort,
	}
}

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
    /// Data Transfer object of Password Recovery. 
    /// </summary>
	[Serializable][DataContract]
	public partial class PasswordRecoveryDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return PasswordRecoveryID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				PasswordRecoveryID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Password Recovery ID.
        /// </summary>
        /// <value>The Password Recovery ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? PasswordRecoveryID { get; set; }
		

		/// <summary>
        /// Gets or sets the Activation Key. 
        /// </summary>
        /// <value>The Activation Key.</value>
		[DataMember][XmlElement(Order = 4)]public String ActivationKey { get; set; }

		/// <summary>
        /// Gets or sets the Activate Date. 
        /// </summary>
        /// <value>The Activate Date.</value>
		[DataMember][XmlElement(Order = 5)]public DateTime? ActivateDate { get; set; }
		
		/// <summary>
        /// Gets or sets the User ID. 
        /// </summary>
        /// <value>The User ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 6)]public Int32? UserID { get; set; }
		

		
	}
	
	
	/// <summary>
    /// Password Recovery fields
    /// </summary>
	public enum PasswordRecoveryField
	{
        /// <summary>
        /// Activation Key
        /// </summary>		
		ActivationKey,
        /// <summary>
        /// Activate Date
        /// </summary>		
		ActivateDate,
        /// <summary>
        /// User ID
        /// </summary>		
		UserID,
	}
}

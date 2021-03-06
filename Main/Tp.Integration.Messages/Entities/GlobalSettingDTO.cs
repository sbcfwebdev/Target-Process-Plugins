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
    /// Data Transfer object of Global Setting. Represents the global settings of the system.
    /// </summary>
	[Serializable][DataContract]
	public partial class GlobalSettingDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return GlobalSettingID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				GlobalSettingID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Global Setting ID.
        /// </summary>
        /// <value>The Global Setting ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? GlobalSettingID { get; set; }
		

		/// <summary>
        /// Gets or sets the Company Name. Company name
        /// </summary>
        /// <value>The Company Name.</value>
		[DataMember][XmlElement(Order = 4)]public String CompanyName { get; set; }

		/// <summary>
        /// Gets or sets the Logo. Logo image
        /// </summary>
        /// <value>The Logo.</value>
		[DataMember][XmlElement(Order = 5)]public Byte[] Logo { get; set; }

		/// <summary>
        /// Gets or sets the SMTPServer. SMTP Server
        /// </summary>
        /// <value>The SMTPServer.</value>
		[DataMember][XmlElement(Order = 6)]public String SMTPServer { get; set; }

		/// <summary>
        /// Gets or sets the SMTPPort. SMTP Port
        /// </summary>
        /// <value>The SMTPPort.</value>
		[DataMember][XmlElement(Order = 7)]public Int32? SMTPPort { get; set; }

		/// <summary>
        /// Gets or sets the SMTPLogin. SMTP Login
        /// </summary>
        /// <value>The SMTPLogin.</value>
		[DataMember][XmlElement(Order = 8)]public String SMTPLogin { get; set; }

		/// <summary>
        /// Gets or sets the SMTPPassword. SMTP Password
        /// </summary>
        /// <value>The SMTPPassword.</value>
		[DataMember][XmlElement(Order = 9)]public String SMTPPassword { get; set; }

		/// <summary>
        /// Gets or sets the SMTPAuthentication. Indicates that smpt authentication is required
        /// </summary>
        /// <value>The SMTPAuthentication.</value>
		[DataMember][XmlElement(Order = 10)]public Boolean? SMTPAuthentication { get; set; }

		/// <summary>
        /// Gets or sets the SMTPSender. SMTP Sender
        /// </summary>
        /// <value>The SMTPSender.</value>
		[DataMember][XmlElement(Order = 11)]public String SMTPSender { get; set; }

		/// <summary>
        /// Gets or sets the Is Email Notifications Enabled. Enables/Disables email notifications
        /// </summary>
        /// <value>The Is Email Notifications Enabled.</value>
		[DataMember][XmlElement(Order = 12)]public Boolean? IsEmailNotificationsEnabled { get; set; }

		/// <summary>
        /// Gets or sets the Help Desk Portal Path. The path to help desk
        /// </summary>
        /// <value>The Help Desk Portal Path.</value>
		[DataMember][XmlElement(Order = 13)]public String HelpDeskPortalPath { get; set; }

		/// <summary>
        /// Gets or sets the App Host And Path. Application host and path
        /// </summary>
        /// <value>The App Host And Path.</value>
		[DataMember][XmlElement(Order = 14)]public String AppHostAndPath { get; set; }

		/// <summary>
        /// Gets or sets the Notify Requester. Indicates that requester shoud be notified about creation of request
        /// </summary>
        /// <value>The Notify Requester.</value>
		[DataMember][XmlElement(Order = 15)]public Boolean? NotifyRequester { get; set; }

		/// <summary>
        /// Gets or sets the Notify Auto Created Requester. Notify the person that he (she) is the requester
        /// </summary>
        /// <value>The Notify Auto Created Requester.</value>
		[DataMember][XmlElement(Order = 16)]public Boolean? NotifyAutoCreatedRequester { get; set; }

		/// <summary>
        /// Gets or sets the Disable Http Access. Disable HTTP access and use HTTPS access only
        /// </summary>
        /// <value>The Disable Http Access.</value>
		[DataMember][XmlElement(Order = 17)]public Boolean? DisableHttpAccess { get; set; }

		/// <summary>
        /// Gets or sets the Csv Export Delimiter. 
        /// </summary>
        /// <value>The Csv Export Delimiter.</value>
		[DataMember][XmlElement(Order = 18)]public String CsvExportDelimiter { get; set; }
		

		
	}
	
	
	/// <summary>
    /// Global Setting fields
    /// </summary>
	public enum GlobalSettingField
	{
        /// <summary>
        /// Company Name
        /// </summary>		
		CompanyName,
        /// <summary>
        /// Logo
        /// </summary>		
		Logo,
        /// <summary>
        /// SMTPServer
        /// </summary>		
		SMTPServer,
        /// <summary>
        /// SMTPPort
        /// </summary>		
		SMTPPort,
        /// <summary>
        /// SMTPLogin
        /// </summary>		
		SMTPLogin,
        /// <summary>
        /// SMTPPassword
        /// </summary>		
		SMTPPassword,
        /// <summary>
        /// SMTPAuthentication
        /// </summary>		
		SMTPAuthentication,
        /// <summary>
        /// SMTPSender
        /// </summary>		
		SMTPSender,
        /// <summary>
        /// Is Email Notifications Enabled
        /// </summary>		
		IsEmailNotificationsEnabled,
        /// <summary>
        /// Help Desk Portal Path
        /// </summary>		
		HelpDeskPortalPath,
        /// <summary>
        /// App Host And Path
        /// </summary>		
		AppHostAndPath,
        /// <summary>
        /// Notify Requester
        /// </summary>		
		NotifyRequester,
        /// <summary>
        /// Notify Auto Created Requester
        /// </summary>		
		NotifyAutoCreatedRequester,
        /// <summary>
        /// Disable Http Access
        /// </summary>		
		DisableHttpAccess,
        /// <summary>
        /// Csv Export Delimiter
        /// </summary>		
		CsvExportDelimiter,
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Net.Mail;
using System.Configuration;
using System.Diagnostics;

namespace LightSwitchApplication.UserCode
{
    public class MailHelper
    {
        private static string SMTPServer;
        private static int SMTPPort;
        private static string SMTPUserId;
        private static string SMTPPassword;

        public MailHelper()
        {
            try
            {
                SMTPServer = ConfigurationManager.AppSettings["SMTPServer"].ToString();
                SMTPPort = int.Parse(ConfigurationManager.AppSettings["SMTPPort"]);
                SMTPUserId = ConfigurationManager.AppSettings["SMTPUserId"].ToString();
                SMTPPassword = ConfigurationManager.AppSettings["SMTPPassword"].ToString();
            }
            catch (Exception ex)
            {
                //throw new InvalidOperationException("Failed to create email.", ex);
            }
        }

        public void SendMail(IEnumerable<string> MailTos, string MailSubject, string MailBody)
        {
            try
            {
                if (string.IsNullOrEmpty(SMTPServer) || string.IsNullOrEmpty(SMTPPassword) || SMTPPort == 0 || string.IsNullOrEmpty(SMTPUserId))
                {
                    throw new Exception("SMTPServer, SMTPUserId, SMTPPassword, and/or SMTPPort were not specified. Please ask Administrator to adjust these appSettings to the web.config.");
                }

                MailAddress SMTPUserAddress = new MailAddress(SMTPUserId);

                MailMessage mail = new MailMessage();
                if (MailBody.ToLower().Contains("<html>"))
                {
                    mail.IsBodyHtml = true;
                }
                else
                {
                    mail.IsBodyHtml = false;
                }
                mail.From = SMTPUserAddress;
                mail.Subject = MailSubject;
                mail.Body = MailBody;

                foreach (var email in MailTos)
                {
                    MailAddress ToAddress = new MailAddress(email);
                    mail.To.Add(ToAddress);
                }

                SmtpClient smtp = new SmtpClient(SMTPServer, SMTPPort);
                smtp.EnableSsl = true;
                smtp.Credentials = new NetworkCredential(SMTPUserAddress.Address, SMTPPassword);
                smtp.Send(mail);
            }
            catch (Exception ex)
            {
                //throw new InvalidOperationException("Failed to create email.", ex);
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Profile;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LightSwitchApplication
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void CreateUserWizard_CreatedUser(object sender, EventArgs e)
        {
            TextBox firstNameTextBox = (TextBox)CreateUserWizardStep1.ContentTemplateContainer.FindControl("FirstName");

            TextBox lastNameTextBox = (TextBox)CreateUserWizardStep1.ContentTemplateContainer.FindControl("LastName");

            TextBox fullNameTextBox = (TextBox)CreateUserWizardStep1.ContentTemplateContainer.FindControl("UserName");

            MembershipUser user = Membership.GetUser(fullNameTextBox.Text);

            var profile = ProfileBase.Create(user.UserName);

            profile.SetPropertyValue("FullName", firstNameTextBox.Text + " " + lastNameTextBox.Text);

            profile.Save();

            Roles.AddUserToRole(fullNameTextBox.Text, "Guest");
        }
    }
}
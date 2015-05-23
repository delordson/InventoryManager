using System;
using System.Web.Routing;
using System.Web.Http;

namespace LightSwitchApplication
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            RouteTable.Routes.MapHttpRoute("PermissionsApi", "UserPermissions/{controller}");
        }
    }
}
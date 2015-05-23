using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.LightSwitch.Server;
using Microsoft.LightSwitch.Security;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication;


namespace LightSwitchApplication.UserPermissions
{
    public class UserPermissionsController : ApiController
    {
        public Dictionary<string, Boolean> Get()
        {
            Dictionary<string, Boolean> permissions = new Dictionary<string, Boolean>();

            using (ServerApplicationContext context = ServerApplicationContext.CreateContext())
            {
                var currentUser = context.Application.User;

                if (currentUser.IsAuthenticated)
                {
                    permissions.Add(Permissions.SecurityAdministration, currentUser.HasPermission(Permissions.SecurityAdministration));

                    currentUser.AddPermissions(Permissions.SecurityAdministration);

                    foreach (Permission permission in context.DataWorkspace.SecurityData.Permissions)
                    {
                        if (permission.Id != Permissions.SecurityAdministration)
                        {
                            permissions.Add(permission.Id, currentUser.HasPermission(permission.Id));
                        }
                    }
                }
            }
            return permissions;

        }

    }
}
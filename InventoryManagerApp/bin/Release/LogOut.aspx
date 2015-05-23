<%@ Page Language="C#" %>

<script runat="server">
    protected override void OnLoad(EventArgs e)
    {
        System.Web.Security.FormsAuthentication.SignOut();

        Response.Clear();
        Response.Redirect(Request.UrlReferrer.ToString());
    }
</script>

<!DOCTYPE HTML>
<html>
<head>
    <title>Log out</title>
</head>
<body>
</body>
</html>

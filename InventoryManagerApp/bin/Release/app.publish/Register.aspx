<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="LightSwitchApplication.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="HandheldFriendly" content="true" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Inventory Manager App - Register</title>
    <style type="text/css">
        /* Here you can customize your login screen */
        html {
            background: #ffffff;
        }

        html,
        body,
        .labelStyle {
            color: #444444;
        }

        h1 {
            color: #444444;
        }

        .requiredStyle {
            color: #FF1B1B;
        }

        input.buttonStyle {
            color: #444444;
            background-color: #f1f1f1;
            border: 1px solid #ababab;
        }

            input.buttonStyle:hover {
                background-color: #dfebf4;
            }

            input.buttonStyle:active {
                background-color: #e3e3e3;
            }

        .textBoxStyle {
            color: #444444;
            background-color: #fcfcfc;
            border: 1px solid #ababab;
        }

        .failureNotification {
            color: #ff0000;
        }

        /* login layout styling */
        * {
            margin: 0px;
        }

        html {
            height: 100%;
            width: 100%;
        }

        html, body {
            font-family: 'Segoe UI','Frutiger','Helvetica Neue',Helvetica,Arial,sans-serif;
            font-size: 16px;
            font-weight: normal;
        }

        h1 {
            font-family: 'Segoe Light','Segoe UI Light','Frutiger','Helvetica Neue',Helvetica,Arial,sans-serif;
            font-size: 40px;
            text-align: left;
            letter-spacing: -1pt;
            font-weight: normal!important;
            margin-bottom: 12px;
        }

        .registrationInfo {
            width: 95%;
            max-width: 310px;
            position: absolute;
            top: 25%;
            left: 50%;
            margin-left: -155px;
        }

        .labelStyle {
            font-family: 'Segoe UI Semibold', 'Frutiger','Helvetica Neue Semibold',Helvetica,Arial,sans-serif;
            font-weight: 700;
        }

        .requiredStyle {
            font-size: 24px;
            line-height: 14px;
            height: 12px;
            vertical-align: bottom;
            margin-left: 5px;
        }

        input.buttonStyle {
            font-family: 'Segoe UI','Frutiger','Helvetica Neue',Helvetica,Arial,sans-serif;
            padding: 5px 10px;
            font-weight: bold;
            border-radius: 0px;
            font-size: 16px;
            cursor: pointer;
            -webkit-appearance: none;
        }

        .textBoxStyle {
            background-image: none;
            font-size: 16px;
            display: block;
            outline: 0;
            height: 36px;
            padding: 1px 8px;
            margin: 0px;
            width: 300px;
            line-height: 36px;
        }
    </style>
</head>
<body>
    <form id="RegistrationForm" runat="server">
        <div class="registrationInfo">
            <asp:CreateUserWizard ID="CreateUserWizard" runat="server" OnCreatedUser="CreateUserWizard_CreatedUser"  CancelDestinationPageUrl="~/LogIn.aspx" FinishDestinationPageUrl="~/LogIn.aspx" ContinueDestinationPageUrl="~/LogIn.aspx" CompleteSuccessText="Your account has been successfully created. ">
                <CreateUserButtonStyle CssClass="buttonStyle" />
                <WizardSteps>
                    <asp:CreateUserWizardStep ID="CreateUserWizardStep1" runat="server">
                        <ContentTemplate>
                            <table>
                                <tr>
                                    <td align="center" colspan="2"><h3>Sign Up for Your New Account</h3></td>
                                </tr>
                                <tr> 
                                     <td align="right"> 
                                         <asp:Label ID="FirstNameLabel" runat="server" AssociatedControlID="FirstName" CssClass="labelStyle">First Name:</asp:Label></td> 
                                     <td> 
                                         <asp:TextBox ID="FirstName" runat="server" CssClass="textBoxStyle"></asp:TextBox> 
                                         
                                     </td>
                                    <td>
                                        <asp:RequiredFieldValidator ID="FirstNameRequired" runat="server" ControlToValidate="FirstName" CssClass="requiredStyle" ErrorMessage="First Name is required." ToolTip="First Name is required." ValidationGroup="CreateUserWizard">*</asp:RequiredFieldValidator> 
                                    </td>
                                 </tr> 

                                 <tr> 
                                     <td align="right"> 
                                         <asp:Label ID="LastNameLabel" runat="server" AssociatedControlID="LastName" CssClass="labelStyle">Last Name:</asp:Label></td> 
                                     <td> 
                                         <asp:TextBox ID="LastName" runat="server" CssClass="textBoxStyle"></asp:TextBox> 
                                     </td> 
                                     <td>
                                         <asp:RequiredFieldValidator ID="LastNameRequired" runat="server" ControlToValidate="LastName" CssClass="requiredStyle" ErrorMessage="Last Name is required." ToolTip="Last Name is required." ValidationGroup="CreateUserWizard">*</asp:RequiredFieldValidator> 
                                     </td>
                                 </tr> 
                                <tr>
                                    <td align="right">
                                        <asp:Label ID="UserNameLabel" runat="server" AssociatedControlID="UserName" CssClass="labelStyle">User Name:</asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="UserName" runat="server" CssClass="textBoxStyle"></asp:TextBox>
                                    </td>
                                    <td>
                                        <asp:RequiredFieldValidator ID="UserNameRequired" runat="server" ControlToValidate="UserName" CssClass="requiredStyle" ErrorMessage="User Name is required." ToolTip="User Name is required." ValidationGroup="CreateUserWizard">*</asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <asp:Label ID="PasswordLabel" runat="server" AssociatedControlID="Password" CssClass="labelStyle">Password:</asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="Password" runat="server" TextMode="Password" CssClass="textBoxStyle"></asp:TextBox>
                                    </td>
                                    <td>
                                        <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" ControlToValidate="Password" CssClass="requiredStyle" ErrorMessage="Password is required." ToolTip="Password is required." ValidationGroup="CreateUserWizard">*</asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <asp:Label ID="ConfirmPasswordLabel" runat="server" AssociatedControlID="ConfirmPassword" CssClass="labelStyle">Confirm Password:</asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="ConfirmPassword" runat="server" TextMode="Password" CssClass="textBoxStyle"></asp:TextBox>
                                    </td>
                                    <td>
                                        <asp:RequiredFieldValidator ID="ConfirmPasswordRequired" runat="server" ControlToValidate="ConfirmPassword" CssClass="requiredStyle" ErrorMessage="Confirm Password is required." ToolTip="Confirm Password is required." ValidationGroup="CreateUserWizard">*</asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <asp:Label ID="EmailLabel" runat="server" AssociatedControlID="Email" CssClass="labelStyle">E-mail:</asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="Email" runat="server" CssClass="textBoxStyle"></asp:TextBox>
                                    </td>
                                    <td>
                                        <asp:RequiredFieldValidator ID="EmailRequired" runat="server" ControlToValidate="Email" CssClass="requiredStyle" ErrorMessage="E-mail is required." ToolTip="E-mail is required." ValidationGroup="CreateUserWizard">*</asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="2">
                                        <asp:CompareValidator ID="PasswordCompare" runat="server" ControlToCompare="Password" ControlToValidate="ConfirmPassword" Display="Dynamic" ErrorMessage="The Password and Confirmation Password must match." ValidationGroup="CreateUserWizard"></asp:CompareValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="2" style="color:Red;">
                                        <asp:Literal ID="ErrorMessage" runat="server" EnableViewState="False"></asp:Literal>
                                    </td>
                                </tr>
                            </table>
                        </ContentTemplate>
                    </asp:CreateUserWizardStep>
                    <asp:CompleteWizardStep ID="CompleteWizardStep1" runat="server">
                    </asp:CompleteWizardStep>
                </WizardSteps>
            </asp:CreateUserWizard>
        </div>
    </form>
</body>
</html>


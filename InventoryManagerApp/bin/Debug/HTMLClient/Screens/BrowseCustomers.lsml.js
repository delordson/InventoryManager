/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseCustomers.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditCustomers"]) {
        screen.findContentItem("AddCustomer").isEnabled = true;
    }
    else {
        screen.findContentItem("AddCustomer").isEnabled = false;
    }
};
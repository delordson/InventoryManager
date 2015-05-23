/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseSuppliers.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditSuppliers"]) {
        screen.findContentItem("AddSupplier").isEnabled = true;
    }
    else {
        screen.findContentItem("AddSupplier").isEnabled = false;
    }
};
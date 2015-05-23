/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseShippingMethods.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditShippingMethods"]) {
        screen.findContentItem("AddShippingMethod").isEnabled = true;
    }
    else {
        screen.findContentItem("AddShippingMethod").isEnabled = false;
    }
};
/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseOrders.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditOrders"]) {
        screen.findContentItem("AddOrder").isEnabled = true;
    }
    else {
        screen.findContentItem("AddOrder").isEnabled = false;
    }
};
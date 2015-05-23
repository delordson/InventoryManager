/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseProducts.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditProducts"]) {
        screen.findContentItem("AddProduct").isEnabled = true;
    }
    else {
        screen.findContentItem("AddProduct").isEnabled = false;
    }
};
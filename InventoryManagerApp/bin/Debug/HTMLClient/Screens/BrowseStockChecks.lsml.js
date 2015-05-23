/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseStockChecks.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditStockChecks"]) {
        screen.findContentItem("AddStockCheck").isEnabled = true;
    }
    else {
        screen.findContentItem("AddStockCheck").isEnabled = false;
    }
};
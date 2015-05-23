/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseEmployees.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditEmployees"]) {
        screen.findContentItem("AddEmployee").isEnabled = true;
    }
    else {
        screen.findContentItem("AddEmployee").isEnabled = false;
    }
};
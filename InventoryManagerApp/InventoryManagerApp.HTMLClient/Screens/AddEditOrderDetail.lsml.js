/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditOrderDetail.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditOrderDetails"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};
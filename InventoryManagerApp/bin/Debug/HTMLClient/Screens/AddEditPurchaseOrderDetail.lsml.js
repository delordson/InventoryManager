/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPurchaseOrderDetail.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditPurchaseOrderDetails"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};
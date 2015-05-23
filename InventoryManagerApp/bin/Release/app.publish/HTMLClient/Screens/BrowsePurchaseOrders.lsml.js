/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowsePurchaseOrders.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditPurchaseOrders"]) {
        screen.findContentItem("AddPurchaseOrder").isEnabled = true;
    }
    else {
        screen.findContentItem("AddPurchaseOrder").isEnabled = false;
    }
};
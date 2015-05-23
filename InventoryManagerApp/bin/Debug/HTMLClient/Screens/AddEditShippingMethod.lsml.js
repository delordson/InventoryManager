/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditShippingMethod.created = function (screen) {
    var shipper;

    if (screen.ShippingMethod.Shipper !== undefined) {
        shipper = screen.ShippingMethod.Shipper;
        screen.details.displayName = "Edit " + shipper;
    }
    else {
        screen.details.displayName = "Add New Shipping Method";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditShippingMethods"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};
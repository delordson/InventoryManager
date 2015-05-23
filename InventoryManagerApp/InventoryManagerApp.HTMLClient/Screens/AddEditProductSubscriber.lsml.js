/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProductSubscriber.created = function (screen) {
    var productName;

    if (screen.ProductSubscriber.Employee !== undefined) {
        productName = screen.ProductSubscriber.Product.ProductName;
        screen.details.displayName = "Edit Subscriber for " + productName;
    }
    else {
        screen.details.displayName = "Add New Subscriber";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditProductSubscribers"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};
/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditCustomer.created = function (screen) {
    var customerName;

    if (screen.Customer.CustomerName !== undefined) {
        customerName = screen.Customer.CustomerName;
        screen.details.displayName = "Edit " + customerName;
    }
    else {
        screen.details.displayName = "Add New Customer";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditCustomers"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};
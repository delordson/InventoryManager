/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditOrder.created = function (screen) {
    var orderReference;

    if (screen.Order.OrderReference !== undefined) {
        orderReference = screen.Order.OrderReference;
        screen.details.displayName = "Edit Order (" + orderReference + ")";
    }
    else {
        screen.details.displayName = "Add New Order";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditOrders"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("OrderDetails").isReadOnly = false;
        screen.findContentItem("AddOrderDetail").isEnabled = true;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("OrderDetails").isReadOnly = true;
        screen.findContentItem("AddOrderDetail").isEnabled = false;
    }
};
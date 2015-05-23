/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditPurchaseOrder.created = function (screen) {
    var purchaseOrder;

    if (screen.PurchaseOrder.PurchaseOrderNumber !== undefined) {
        purchaseOrder = screen.PurchaseOrder.PurchaseOrderNumber;
        screen.details.displayName = "Edit Purchase Order (" + purchaseOrder + ")";
    }
    else {
        screen.details.displayName = "Add New Purchase Order";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditPurchaseOrders"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("PurchaseOrderDetails").isReadOnly = false;
        screen.findContentItem("AddPurchaseOrderDetail").isEnabled = true;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("PurchaseOrderDetails").isReadOnly = true;
        screen.findContentItem("AddPurchaseOrderDetail").isEnabled = false;
    }
};
/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProduct.created = function (screen) {
    var Int32 = ':Int32';
    var filter = '(Product/Id eq ' + msls._toODataString(screen.Product.Id, Int32) + ')';
    var unitsReceived = 0;
    var unitsShipped = 0;
    var unitsLost = 0;

    myapp.activeDataWorkspace.ApplicationData.PurchaseOrderDetails.filter(filter).execute().then(function (results) {
        var TotalUnitsOnOrder = CountOfUnitsOnOrders(results);
        screen.UnitsOnOrder = TotalUnitsOnOrder.toString();
        unitsReceived = CountOfUnitsReceived(results);
    })
    .then(function () {
        myapp.activeDataWorkspace.ApplicationData.OrderDetails.filter(filter).execute().then(function (results) {
            unitsShipped = CountOfUnitsShipped(results);
        })
        .then(function () {
            myapp.activeDataWorkspace.ApplicationData.StockCheckDetails.filter(filter).execute().then(function (results) {
                unitsLost = CountOfUnitsLost(results);
            }).then(function () {
                screen.UnitsOnHand = unitsReceived - (unitsShipped + unitsLost);
            })
        })
    });


    var productName;

    if (screen.Product.ProductName !== undefined) {
        productName = screen.Product.ProductName;
        screen.details.displayName = "Edit " + productName;
    }
    else {
        screen.details.displayName = "Add New Product";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditProducts"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("Orders").isReadOnly = false;
        screen.findContentItem("PurchaseOrders").isReadOnly = false;
        screen.findContentItem("StockChecks").isReadOnly = false;
        screen.findContentItem("ProductSubscribersGroup").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("Orders").isReadOnly = true;
        screen.findContentItem("PurchaseOrders").isReadOnly = true;
        screen.findContentItem("StockChecks").isReadOnly = true;
        screen.findContentItem("ProductSubscribersGroup").isReadOnly = true;
    }

    if (myapp.permissions["LightSwitchApplication:CanEditProductSubscribers"]) {
        screen.findContentItem("AddProductSubscriber").isEnabled = true;
    }
    else {
        screen.findContentItem("AddProductSubscriber").isEnabled = false;
    }
};

function CountOfUnitsOnOrders(PurchaseOrderDetails) {
    var TotalUnitsOnOrder = 0;
    var purchaseOrderDetails = PurchaseOrderDetails.results;
    purchaseOrderDetails.forEach(function (purchaseOrderDetail) {
        TotalUnitsOnOrder = TotalUnitsOnOrder + (purchaseOrderDetail.UnitsOrdered - purchaseOrderDetail.UnitsReceived);
    });
    return TotalUnitsOnOrder;
}

function CountOfUnitsReceived(PurchaseOrderDetails) {
    var TotalUnitsReceived = 0;
    var purchaseOrderDetails = PurchaseOrderDetails.results;
    purchaseOrderDetails.forEach(function (purchaseOrderDetail) {
        TotalUnitsReceived = TotalUnitsReceived + purchaseOrderDetail.UnitsReceived;
    });
    return TotalUnitsReceived;
}

function CountOfUnitsShipped(OrderDetails) {
    var TotalUnitsShipped = 0;
    var orderDetails = OrderDetails.results;
    orderDetails.forEach(function (orderDetail) {
        TotalUnitsShipped = TotalUnitsShipped + orderDetail.UnitsShipped;
    });
    return TotalUnitsShipped;
}

function CountOfUnitsLost(StockCheckDetails) {
    var TotalUnitsLost = 0;
    var stockCheckDetails = StockCheckDetails.results;
    stockCheckDetails.forEach(function (stockCheckDetail) {
        TotalUnitsLost = TotalUnitsLost + (stockCheckDetail.UnitsExpected - stockCheckDetail.UnitsFound);
    });
    return TotalUnitsLost;
}
myapp.AddEditProduct.UnitsOnOrder_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "72px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "blue");
};
myapp.AddEditProduct.UnitsOnHand_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "72px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "blue");
};

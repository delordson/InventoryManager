/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditStockCheckDetail.created = function (screen) {
    function onProductChange() {
        var Int32 = ':Int32';
        var filter = '(Product/Id eq ' + msls._toODataString(screen.StockCheckDetail.Product.Id, Int32) + ')';
        var unitsReceived = 0;
        var unitsShipped = 0;
        var unitsLost = 0;

        myapp.activeDataWorkspace.ApplicationData.PurchaseOrderDetails.filter(filter).execute().then(function (results) {
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
                    screen.StockCheckDetail.UnitsExpected = unitsReceived - (unitsShipped + unitsLost);
                })
            })
        });
    }
    
    screen.StockCheckDetail.addChangeListener("Product", onProductChange);
    screen.details.rootContentItem
    .handleViewDispose(function () {
        screen.StockCheckDetail.removeChangeListener("Product", onProductChange)
    });

    if (myapp.permissions["LightSwitchApplication:CanEditStockCheckDetails"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};

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
myapp.AddEditStockCheckDetail.UnitsExpected_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "72px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    $(element).css("color", "blue");
};
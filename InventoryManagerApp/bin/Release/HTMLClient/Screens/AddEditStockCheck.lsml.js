/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditStockCheck.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditStockChecks"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("StockCheckDetails").isReadOnly = false;
        screen.findContentItem("AddStockCheckDetail").isEnabled = true;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("StockCheckDetails").isReadOnly = true;
        screen.findContentItem("AddStockCheckDetail").isEnabled = false;
    }
};
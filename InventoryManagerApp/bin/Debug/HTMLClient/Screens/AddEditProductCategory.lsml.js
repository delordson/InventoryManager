/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProductCategory.created = function (screen) {
    var category;

    if (screen.ProductCategory.Category !== undefined) {
        category = screen.ProductCategory.Category;
        screen.details.displayName = "Edit " + category;
    }
    else {
        screen.details.displayName = "Add New Product Category";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditProductCategories"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};
/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseProductCategories.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditProductcategories"]) {
        screen.findContentItem("AddProductCategory").isEnabled = true;
    }
    else {
        screen.findContentItem("AddProductCategory").isEnabled = false;
    }
};
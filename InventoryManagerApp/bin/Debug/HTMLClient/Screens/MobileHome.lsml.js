/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MobileHome.ManageProducts_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileProducts.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.PurchaseOrders_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobilePurchaseOrders.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ManageOrders_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileOrders.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.StockCheck_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileStockCheck.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.Employees_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileEmployees.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.Suppliers_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileSuppliers.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.Customers_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileCustomers.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ProductCategories_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileProductCategories.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ShippingMethods_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileShippingMethods.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.created = function (screen) {
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};
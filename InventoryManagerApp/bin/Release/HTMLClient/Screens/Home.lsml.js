/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Home.ManageProducts_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Products.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.PurchaseOrders_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/PurchaseOrders.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.ManageOrders_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Orders.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.StockCheck_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/StockCheck.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.ManageEmployees_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Employees.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.ManageSuppliers_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Suppliers.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.ManageCustomers_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Customers.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.ManageProductCategories_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/ProductCategories.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.ManageShippingMethods_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/ShippingMethods.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.created = function (screen) {
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};
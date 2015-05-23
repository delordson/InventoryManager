/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditCustomer.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCustomer
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.AddEditCustomer,
            value: lightSwitchApplication.AddEditCustomer
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.AddEditCustomer,
            value: lightSwitchApplication.Customer
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.Customer
        },
        CustomerName: {
            _$class: msls.ContentItem,
            _$name: "CustomerName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        AddressLine1: {
            _$class: msls.ContentItem,
            _$name: "AddressLine1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        AddressLine2: {
            _$class: msls.ContentItem,
            _$name: "AddressLine2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        AddressLine3: {
            _$class: msls.ContentItem,
            _$name: "AddressLine3",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        AddressLine4: {
            _$class: msls.ContentItem,
            _$name: "AddressLine4",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.Customer
        },
        PostCode: {
            _$class: msls.ContentItem,
            _$name: "PostCode",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Phone2: {
            _$class: msls.ContentItem,
            _$name: "Phone2",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Fax: {
            _$class: msls.ContentItem,
            _$name: "Fax",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditCustomer,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditCustomer
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditCustomer, {
        /// <field>
        /// Called when a new AddEditCustomer screen is created.
        /// <br/>created(msls.application.AddEditCustomer screen)
        /// </field>
        created: [lightSwitchApplication.AddEditCustomer],
        /// <field>
        /// Called before changes on an active AddEditCustomer screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditCustomer screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditCustomer],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("left"); }],
        /// <field>
        /// Called after the CustomerName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerName_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("CustomerName"); }],
        /// <field>
        /// Called after the AddressLine1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("AddressLine1"); }],
        /// <field>
        /// Called after the AddressLine2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine2_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("AddressLine2"); }],
        /// <field>
        /// Called after the AddressLine3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine3_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("AddressLine3"); }],
        /// <field>
        /// Called after the AddressLine4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine4_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("AddressLine4"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("right"); }],
        /// <field>
        /// Called after the PostCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PostCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("PostCode"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Phone2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone2_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Phone2"); }],
        /// <field>
        /// Called after the Fax content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fax_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Fax"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.AddEditCustomer().findContentItem("Website"); }]
    });

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.Employee
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("left"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("right"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Current"); }]
    });

    lightSwitchApplication.AddEditOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditOrder
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.AddEditOrder,
            value: lightSwitchApplication.AddEditOrder
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.AddEditOrder,
            value: lightSwitchApplication.Order
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Order
        },
        OrderReference: {
            _$class: msls.ContentItem,
            _$name: "OrderReference",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Order,
            value: String
        },
        OrderDate: {
            _$class: msls.ContentItem,
            _$name: "OrderDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Order,
            value: Date
        },
        Customer: {
            _$class: msls.ContentItem,
            _$name: "Customer",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Customer
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Customer",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.Customer
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Order
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Employee,
            value: String
        },
        OrderPaidFor: {
            _$class: msls.ContentItem,
            _$name: "OrderPaidFor",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Order,
            value: Boolean
        },
        DatePaid: {
            _$class: msls.ContentItem,
            _$name: "DatePaid",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.Order,
            value: Date
        },
        OrderDetails: {
            _$class: msls.ContentItem,
            _$name: "OrderDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.AddEditOrder,
            value: lightSwitchApplication.AddEditOrder
        },
        OrderDetails1: {
            _$class: msls.ContentItem,
            _$name: "OrderDetails1",
            _$parentName: "OrderDetails",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.AddEditOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditOrder,
                _$entry: {
                    elementType: lightSwitchApplication.OrderDetail
                }
            }
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "OrderDetails1",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.OrderDetail
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.Product
        },
        UnitsOrdered: {
            _$class: msls.ContentItem,
            _$name: "UnitsOrdered",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.OrderDetail,
            value: Number
        },
        UnitsShipped: {
            _$class: msls.ContentItem,
            _$name: "UnitsShipped",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.OrderDetail,
            value: Number
        },
        DateOrderShipped: {
            _$class: msls.ContentItem,
            _$name: "DateOrderShipped",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.OrderDetail,
            value: Date
        },
        ShippingMethod: {
            _$class: msls.ContentItem,
            _$name: "ShippingMethod",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditOrder,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.ShippingMethod
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditOrder
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditOrder, {
        /// <field>
        /// Called when a new AddEditOrder screen is created.
        /// <br/>created(msls.application.AddEditOrder screen)
        /// </field>
        created: [lightSwitchApplication.AddEditOrder],
        /// <field>
        /// Called before changes on an active AddEditOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditOrder],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("left"); }],
        /// <field>
        /// Called after the OrderReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("OrderReference"); }],
        /// <field>
        /// Called after the OrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("OrderDate"); }],
        /// <field>
        /// Called after the Customer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Customer_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("Customer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("right"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("LastName"); }],
        /// <field>
        /// Called after the OrderPaidFor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderPaidFor_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("OrderPaidFor"); }],
        /// <field>
        /// Called after the DatePaid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatePaid_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("DatePaid"); }],
        /// <field>
        /// Called after the OrderDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("OrderDetails"); }],
        /// <field>
        /// Called after the OrderDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("OrderDetails1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("Product"); }],
        /// <field>
        /// Called after the UnitsOrdered content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsOrdered_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("UnitsOrdered"); }],
        /// <field>
        /// Called after the UnitsShipped content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsShipped_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("UnitsShipped"); }],
        /// <field>
        /// Called after the DateOrderShipped content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateOrderShipped_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("DateOrderShipped"); }],
        /// <field>
        /// Called after the ShippingMethod content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShippingMethod_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrder().findContentItem("ShippingMethod"); }]
    });

    lightSwitchApplication.AddEditOrderDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditOrderDetail
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.AddEditOrderDetail,
            value: lightSwitchApplication.AddEditOrderDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.AddEditOrderDetail,
            value: lightSwitchApplication.OrderDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.OrderDetail
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.Product
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Product",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        UnitsOrdered: {
            _$class: msls.ContentItem,
            _$name: "UnitsOrdered",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.OrderDetail,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.OrderDetail
        },
        UnitsShipped: {
            _$class: msls.ContentItem,
            _$name: "UnitsShipped",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.OrderDetail,
            value: Number
        },
        DateOrderShipped: {
            _$class: msls.ContentItem,
            _$name: "DateOrderShipped",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.OrderDetail,
            value: Date
        },
        ShippingMethod: {
            _$class: msls.ContentItem,
            _$name: "ShippingMethod",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.ShippingMethod
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "ShippingMethod",
            screen: lightSwitchApplication.AddEditOrderDetail,
            data: lightSwitchApplication.ShippingMethod,
            value: lightSwitchApplication.ShippingMethod
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditOrderDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditOrderDetail, {
        /// <field>
        /// Called when a new AddEditOrderDetail screen is created.
        /// <br/>created(msls.application.AddEditOrderDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditOrderDetail],
        /// <field>
        /// Called before changes on an active AddEditOrderDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditOrderDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditOrderDetail],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("Product"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the UnitsOrdered content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsOrdered_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("UnitsOrdered"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the UnitsShipped content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsShipped_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("UnitsShipped"); }],
        /// <field>
        /// Called after the DateOrderShipped content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateOrderShipped_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("DateOrderShipped"); }],
        /// <field>
        /// Called after the ShippingMethod content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShippingMethod_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("ShippingMethod"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditOrderDetail().findContentItem("RowTemplate2"); }]
    });

    lightSwitchApplication.AddEditProduct.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProduct
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: lightSwitchApplication.AddEditProduct
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: lightSwitchApplication.Product
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductCategory: {
            _$class: msls.ContentItem,
            _$name: "ProductCategory",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductCategory
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProductCategory",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.ProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        ProductDescription: {
            _$class: msls.ContentItem,
            _$name: "ProductDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        UnitsOnHand: {
            _$class: msls.ContentItem,
            _$name: "UnitsOnHand",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        UnitPrice: {
            _$class: msls.ContentItem,
            _$name: "UnitPrice",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        ReorderLevel: {
            _$class: msls.ContentItem,
            _$name: "ReorderLevel",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Number
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        LeadTime: {
            _$class: msls.ContentItem,
            _$name: "LeadTime",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        UnitsOnOrder: {
            _$class: msls.ContentItem,
            _$name: "UnitsOnOrder",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Product,
            value: String
        },
        PurchaseOrders: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrders",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: lightSwitchApplication.AddEditProduct
        },
        PurchaseOrderDetailsCollection: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailsCollection",
            _$parentName: "PurchaseOrders",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProduct,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrderDetail
                }
            }
        },
        PurchaseOrderDetailsCollectionTemplate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailsCollectionTemplate",
            _$parentName: "PurchaseOrderDetailsCollection",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        Product2: {
            _$class: msls.ContentItem,
            _$name: "Product2",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.Product
        },
        UnitsOrdered1: {
            _$class: msls.ContentItem,
            _$name: "UnitsOrdered1",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        Discount: {
            _$class: msls.ContentItem,
            _$name: "Discount",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UnitPricePaid: {
            _$class: msls.ContentItem,
            _$name: "UnitPricePaid",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UnitsReceived: {
            _$class: msls.ContentItem,
            _$name: "UnitsReceived",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        CreatedBy1: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy1",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Created1: {
            _$class: msls.ContentItem,
            _$name: "Created1",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        ModifiedBy1: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy1",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        Modified1: {
            _$class: msls.ContentItem,
            _$name: "Modified1",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        Orders: {
            _$class: msls.ContentItem,
            _$name: "Orders",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: lightSwitchApplication.AddEditProduct
        },
        OrderDetails: {
            _$class: msls.ContentItem,
            _$name: "OrderDetails",
            _$parentName: "Orders",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProduct,
                _$entry: {
                    elementType: lightSwitchApplication.OrderDetail
                }
            }
        },
        OrderDetailsTemplate: {
            _$class: msls.ContentItem,
            _$name: "OrderDetailsTemplate",
            _$parentName: "OrderDetails",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.OrderDetail
        },
        Order: {
            _$class: msls.ContentItem,
            _$name: "Order",
            _$parentName: "OrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.Order
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "OrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.Product
        },
        UnitsOrdered: {
            _$class: msls.ContentItem,
            _$name: "UnitsOrdered",
            _$parentName: "OrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: Number
        },
        UnitsShipped: {
            _$class: msls.ContentItem,
            _$name: "UnitsShipped",
            _$parentName: "OrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: Number
        },
        DateOrderShipped: {
            _$class: msls.ContentItem,
            _$name: "DateOrderShipped",
            _$parentName: "OrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: Date
        },
        ShippingMethod: {
            _$class: msls.ContentItem,
            _$name: "ShippingMethod",
            _$parentName: "OrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: lightSwitchApplication.ShippingMethod
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "OrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "OrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "OrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "OrderDetailsTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.OrderDetail,
            value: Date
        },
        StockChecks: {
            _$class: msls.ContentItem,
            _$name: "StockChecks",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: lightSwitchApplication.AddEditProduct
        },
        StockCheckDetail: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDetail",
            _$parentName: "StockChecks",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProduct,
                _$entry: {
                    elementType: lightSwitchApplication.StockCheckDetail
                }
            }
        },
        StockCheckDetailTemplate: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDetailTemplate",
            _$parentName: "StockCheckDetail",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.StockCheckDetail,
            value: lightSwitchApplication.StockCheckDetail
        },
        StockCheckDate: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDate",
            _$parentName: "StockCheckDetailTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.StockCheckDetail,
            value: Date
        },
        Product4: {
            _$class: msls.ContentItem,
            _$name: "Product4",
            _$parentName: "StockCheckDetailTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.StockCheckDetail,
            value: lightSwitchApplication.Product
        },
        UnitsExpected: {
            _$class: msls.ContentItem,
            _$name: "UnitsExpected",
            _$parentName: "StockCheckDetailTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.StockCheckDetail,
            value: Number
        },
        UnitsFound: {
            _$class: msls.ContentItem,
            _$name: "UnitsFound",
            _$parentName: "StockCheckDetailTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.StockCheckDetail,
            value: Number
        },
        ProductSubscribersGroup: {
            _$class: msls.ContentItem,
            _$name: "ProductSubscribersGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: lightSwitchApplication.AddEditProduct
        },
        ProductSubscribers: {
            _$class: msls.ContentItem,
            _$name: "ProductSubscribers",
            _$parentName: "ProductSubscribersGroup",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.AddEditProduct,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProduct,
                _$entry: {
                    elementType: lightSwitchApplication.ProductSubscriber
                }
            }
        },
        ProductSubscribersTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProductSubscribersTemplate",
            _$parentName: "ProductSubscribers",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.ProductSubscriber,
            value: lightSwitchApplication.ProductSubscriber
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "ProductSubscribersTemplate",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.ProductSubscriber,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditProduct,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProduct
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProduct, {
        /// <field>
        /// Called when a new AddEditProduct screen is created.
        /// <br/>created(msls.application.AddEditProduct screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProduct],
        /// <field>
        /// Called before changes on an active AddEditProduct screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProduct screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProduct],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("left"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the ProductCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategory_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductCategory"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProductDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductDescription"); }],
        /// <field>
        /// Called after the UnitsOnHand content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsOnHand_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitsOnHand"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("right"); }],
        /// <field>
        /// Called after the UnitPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitPrice_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitPrice"); }],
        /// <field>
        /// Called after the ReorderLevel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReorderLevel_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ReorderLevel"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Discontinued"); }],
        /// <field>
        /// Called after the LeadTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LeadTime_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("LeadTime"); }],
        /// <field>
        /// Called after the UnitsOnOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsOnOrder_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitsOnOrder"); }],
        /// <field>
        /// Called after the PurchaseOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrders_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("PurchaseOrders"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailsCollection content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailsCollection_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("PurchaseOrderDetailsCollection"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailsCollectionTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailsCollectionTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("PurchaseOrderDetailsCollectionTemplate"); }],
        /// <field>
        /// Called after the Product2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product2_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Product2"); }],
        /// <field>
        /// Called after the UnitsOrdered1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsOrdered1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitsOrdered1"); }],
        /// <field>
        /// Called after the Discount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discount_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Discount"); }],
        /// <field>
        /// Called after the UnitPricePaid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitPricePaid_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitPricePaid"); }],
        /// <field>
        /// Called after the UnitsReceived content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsReceived_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitsReceived"); }],
        /// <field>
        /// Called after the CreatedBy1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("CreatedBy1"); }],
        /// <field>
        /// Called after the Created1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Created1"); }],
        /// <field>
        /// Called after the ModifiedBy1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ModifiedBy1"); }],
        /// <field>
        /// Called after the Modified1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Modified1"); }],
        /// <field>
        /// Called after the Orders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Orders_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Orders"); }],
        /// <field>
        /// Called after the OrderDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("OrderDetails"); }],
        /// <field>
        /// Called after the OrderDetailsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderDetailsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("OrderDetailsTemplate"); }],
        /// <field>
        /// Called after the Order content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Order_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Order"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Product"); }],
        /// <field>
        /// Called after the UnitsOrdered content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsOrdered_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitsOrdered"); }],
        /// <field>
        /// Called after the UnitsShipped content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsShipped_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitsShipped"); }],
        /// <field>
        /// Called after the DateOrderShipped content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateOrderShipped_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("DateOrderShipped"); }],
        /// <field>
        /// Called after the ShippingMethod content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShippingMethod_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ShippingMethod"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Modified"); }],
        /// <field>
        /// Called after the StockChecks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockChecks_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("StockChecks"); }],
        /// <field>
        /// Called after the StockCheckDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDetail_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("StockCheckDetail"); }],
        /// <field>
        /// Called after the StockCheckDetailTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDetailTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("StockCheckDetailTemplate"); }],
        /// <field>
        /// Called after the StockCheckDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("StockCheckDate"); }],
        /// <field>
        /// Called after the Product4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product4_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Product4"); }],
        /// <field>
        /// Called after the UnitsExpected content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsExpected_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitsExpected"); }],
        /// <field>
        /// Called after the UnitsFound content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsFound_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UnitsFound"); }],
        /// <field>
        /// Called after the ProductSubscribersGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductSubscribersGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductSubscribersGroup"); }],
        /// <field>
        /// Called after the ProductSubscribers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductSubscribers_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductSubscribers"); }],
        /// <field>
        /// Called after the ProductSubscribersTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductSubscribersTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("ProductSubscribersTemplate"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Employee"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditProduct().findContentItem("Email"); }]
    });

    lightSwitchApplication.AddEditProductCategory.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductCategory
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProductCategory,
            data: lightSwitchApplication.AddEditProductCategory,
            value: lightSwitchApplication.AddEditProductCategory
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditProductCategory,
            data: lightSwitchApplication.AddEditProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductCategory,
            data: lightSwitchApplication.ProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        Category: {
            _$class: msls.ContentItem,
            _$name: "Category",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProductCategory,
            data: lightSwitchApplication.ProductCategory,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProductCategory,
            data: lightSwitchApplication.ProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductCategory
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProductCategory, {
        /// <field>
        /// Called when a new AddEditProductCategory screen is created.
        /// <br/>created(msls.application.AddEditProductCategory screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProductCategory],
        /// <field>
        /// Called before changes on an active AddEditProductCategory screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProductCategory screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProductCategory],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductCategory().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductCategory().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductCategory().findContentItem("left"); }],
        /// <field>
        /// Called after the Category content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Category_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductCategory().findContentItem("Category"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductCategory().findContentItem("right"); }]
    });

    lightSwitchApplication.AddEditProductSubscriber.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductSubscriber
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProductSubscriber,
            data: lightSwitchApplication.AddEditProductSubscriber,
            value: lightSwitchApplication.AddEditProductSubscriber
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditProductSubscriber,
            data: lightSwitchApplication.AddEditProductSubscriber,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditProductSubscriber,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditProductSubscriber,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditProductSubscriber,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditProductSubscriber,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProductSubscriber
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProductSubscriber, {
        /// <field>
        /// Called when a new AddEditProductSubscriber screen is created.
        /// <br/>created(msls.application.AddEditProductSubscriber screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProductSubscriber],
        /// <field>
        /// Called before changes on an active AddEditProductSubscriber screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProductSubscriber screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProductSubscriber],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductSubscriber().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductSubscriber().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductSubscriber().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductSubscriber().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductSubscriber().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProductSubscriber().findContentItem("FirstName"); }]
    });

    lightSwitchApplication.AddEditPurchaseOrder.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrder
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.AddEditPurchaseOrder,
            value: lightSwitchApplication.AddEditPurchaseOrder
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.AddEditPurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.Supplier
        },
        Supplier1: {
            _$class: msls.ContentItem,
            _$name: "Supplier1",
            _$parentName: "Supplier",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        PurchaseOrderDescription: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        DatePurchaseOrderPlaced: {
            _$class: msls.ContentItem,
            _$name: "DatePurchaseOrderPlaced",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        DatePurchaseOrderRequired: {
            _$class: msls.ContentItem,
            _$name: "DatePurchaseOrderRequired",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        DatePurchaseOrderShipped: {
            _$class: msls.ContentItem,
            _$name: "DatePurchaseOrderShipped",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        ShippingMethod: {
            _$class: msls.ContentItem,
            _$name: "ShippingMethod",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.ShippingMethod
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ShippingMethod",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.ShippingMethod,
            value: lightSwitchApplication.ShippingMethod
        },
        PurchaseOrderDetails: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.AddEditPurchaseOrder,
            value: lightSwitchApplication.AddEditPurchaseOrder
        },
        PurchaseOrderDetailsCollection: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailsCollection",
            _$parentName: "PurchaseOrderDetails",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.AddEditPurchaseOrder,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditPurchaseOrder,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrderDetail
                }
            }
        },
        PurchaseOrderDetailsCollectionTemplate: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderDetailsCollectionTemplate",
            _$parentName: "PurchaseOrderDetailsCollection",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        PurchaseOrder: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrder",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrder
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.Product
        },
        UnitsOrdered: {
            _$class: msls.ContentItem,
            _$name: "UnitsOrdered",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        Discount: {
            _$class: msls.ContentItem,
            _$name: "Discount",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UnitPricePaid: {
            _$class: msls.ContentItem,
            _$name: "UnitPricePaid",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UnitsReceived: {
            _$class: msls.ContentItem,
            _$name: "UnitsReceived",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        DateRecieved: {
            _$class: msls.ContentItem,
            _$name: "DateRecieved",
            _$parentName: "PurchaseOrderDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditPurchaseOrder,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrder
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPurchaseOrder, {
        /// <field>
        /// Called when a new AddEditPurchaseOrder screen is created.
        /// <br/>created(msls.application.AddEditPurchaseOrder screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPurchaseOrder],
        /// <field>
        /// Called before changes on an active AddEditPurchaseOrder screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPurchaseOrder screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPurchaseOrder],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("left"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the Supplier1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("Supplier1"); }],
        /// <field>
        /// Called after the PurchaseOrderDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrderDescription"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("right"); }],
        /// <field>
        /// Called after the DatePurchaseOrderPlaced content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatePurchaseOrderPlaced_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("DatePurchaseOrderPlaced"); }],
        /// <field>
        /// Called after the DatePurchaseOrderRequired content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatePurchaseOrderRequired_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("DatePurchaseOrderRequired"); }],
        /// <field>
        /// Called after the DatePurchaseOrderShipped content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatePurchaseOrderShipped_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("DatePurchaseOrderShipped"); }],
        /// <field>
        /// Called after the ShippingMethod content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShippingMethod_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("ShippingMethod"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PurchaseOrderDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrderDetails"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailsCollection content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailsCollection_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrderDetailsCollection"); }],
        /// <field>
        /// Called after the PurchaseOrderDetailsCollectionTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderDetailsCollectionTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrderDetailsCollectionTemplate"); }],
        /// <field>
        /// Called after the PurchaseOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrder_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("PurchaseOrder"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("Product"); }],
        /// <field>
        /// Called after the UnitsOrdered content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsOrdered_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("UnitsOrdered"); }],
        /// <field>
        /// Called after the Discount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discount_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("Discount"); }],
        /// <field>
        /// Called after the UnitPricePaid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitPricePaid_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("UnitPricePaid"); }],
        /// <field>
        /// Called after the UnitsReceived content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsReceived_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("UnitsReceived"); }],
        /// <field>
        /// Called after the DateRecieved content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRecieved_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrder().findContentItem("DateRecieved"); }]
    });

    lightSwitchApplication.AddEditPurchaseOrderDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.AddEditPurchaseOrderDetail,
            value: lightSwitchApplication.AddEditPurchaseOrderDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.AddEditPurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.Product
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Product",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        UnitsOrdered: {
            _$class: msls.ContentItem,
            _$name: "UnitsOrdered",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: lightSwitchApplication.PurchaseOrderDetail
        },
        Discount: {
            _$class: msls.ContentItem,
            _$name: "Discount",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UnitPricePaid: {
            _$class: msls.ContentItem,
            _$name: "UnitPricePaid",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: String
        },
        UnitsReceived: {
            _$class: msls.ContentItem,
            _$name: "UnitsReceived",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Number
        },
        DateRecieved: {
            _$class: msls.ContentItem,
            _$name: "DateRecieved",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail,
            data: lightSwitchApplication.PurchaseOrderDetail,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPurchaseOrderDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPurchaseOrderDetail, {
        /// <field>
        /// Called when a new AddEditPurchaseOrderDetail screen is created.
        /// <br/>created(msls.application.AddEditPurchaseOrderDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPurchaseOrderDetail],
        /// <field>
        /// Called before changes on an active AddEditPurchaseOrderDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPurchaseOrderDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPurchaseOrderDetail],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("Product"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the UnitsOrdered content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsOrdered_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("UnitsOrdered"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the Discount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discount_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("Discount"); }],
        /// <field>
        /// Called after the UnitPricePaid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitPricePaid_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("UnitPricePaid"); }],
        /// <field>
        /// Called after the UnitsReceived content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsReceived_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("UnitsReceived"); }],
        /// <field>
        /// Called after the DateRecieved content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRecieved_postRender: [$element, function () { return new lightSwitchApplication.AddEditPurchaseOrderDetail().findContentItem("DateRecieved"); }]
    });

    lightSwitchApplication.AddEditShippingMethod.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditShippingMethod
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditShippingMethod,
            data: lightSwitchApplication.AddEditShippingMethod,
            value: lightSwitchApplication.AddEditShippingMethod
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditShippingMethod,
            data: lightSwitchApplication.AddEditShippingMethod,
            value: lightSwitchApplication.ShippingMethod
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditShippingMethod,
            data: lightSwitchApplication.ShippingMethod,
            value: lightSwitchApplication.ShippingMethod
        },
        Shipper: {
            _$class: msls.ContentItem,
            _$name: "Shipper",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditShippingMethod,
            data: lightSwitchApplication.ShippingMethod,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditShippingMethod,
            data: lightSwitchApplication.ShippingMethod,
            value: lightSwitchApplication.ShippingMethod
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditShippingMethod
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditShippingMethod, {
        /// <field>
        /// Called when a new AddEditShippingMethod screen is created.
        /// <br/>created(msls.application.AddEditShippingMethod screen)
        /// </field>
        created: [lightSwitchApplication.AddEditShippingMethod],
        /// <field>
        /// Called before changes on an active AddEditShippingMethod screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditShippingMethod screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditShippingMethod],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditShippingMethod().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditShippingMethod().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditShippingMethod().findContentItem("left"); }],
        /// <field>
        /// Called after the Shipper content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Shipper_postRender: [$element, function () { return new lightSwitchApplication.AddEditShippingMethod().findContentItem("Shipper"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditShippingMethod().findContentItem("right"); }]
    });

    lightSwitchApplication.AddEditStockCheck.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockCheck
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.AddEditStockCheck,
            value: lightSwitchApplication.AddEditStockCheck
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.AddEditStockCheck,
            value: lightSwitchApplication.StockCheck
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheck,
            value: lightSwitchApplication.StockCheck
        },
        StockCheckDate: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheck,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheck,
            value: lightSwitchApplication.StockCheck
        },
        StockCheckBy: {
            _$class: msls.ContentItem,
            _$name: "StockCheckBy",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheck,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "StockCheckBy",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "StockCheckBy",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.Employee,
            value: String
        },
        StockCheckDetails: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.AddEditStockCheck,
            value: lightSwitchApplication.AddEditStockCheck
        },
        StockCheckDetailsCollection: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDetailsCollection",
            _$parentName: "StockCheckDetails",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.AddEditStockCheck,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditStockCheck,
                _$entry: {
                    elementType: lightSwitchApplication.StockCheckDetail
                }
            }
        },
        StockCheckDetailsCollectionTemplate: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDetailsCollectionTemplate",
            _$parentName: "StockCheckDetailsCollection",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheckDetail,
            value: lightSwitchApplication.StockCheckDetail
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "StockCheckDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheckDetail,
            value: lightSwitchApplication.Product
        },
        UnitsExpected: {
            _$class: msls.ContentItem,
            _$name: "UnitsExpected",
            _$parentName: "StockCheckDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheckDetail,
            value: Number
        },
        UnitsFound: {
            _$class: msls.ContentItem,
            _$name: "UnitsFound",
            _$parentName: "StockCheckDetailsCollectionTemplate",
            screen: lightSwitchApplication.AddEditStockCheck,
            data: lightSwitchApplication.StockCheckDetail,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockCheck
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditStockCheck, {
        /// <field>
        /// Called when a new AddEditStockCheck screen is created.
        /// <br/>created(msls.application.AddEditStockCheck screen)
        /// </field>
        created: [lightSwitchApplication.AddEditStockCheck],
        /// <field>
        /// Called before changes on an active AddEditStockCheck screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditStockCheck screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditStockCheck],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("left"); }],
        /// <field>
        /// Called after the StockCheckDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("StockCheckDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("right"); }],
        /// <field>
        /// Called after the StockCheckBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("StockCheckBy"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the StockCheckDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("StockCheckDetails"); }],
        /// <field>
        /// Called after the StockCheckDetailsCollection content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDetailsCollection_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("StockCheckDetailsCollection"); }],
        /// <field>
        /// Called after the StockCheckDetailsCollectionTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDetailsCollectionTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("StockCheckDetailsCollectionTemplate"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("Product"); }],
        /// <field>
        /// Called after the UnitsExpected content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsExpected_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("UnitsExpected"); }],
        /// <field>
        /// Called after the UnitsFound content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsFound_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheck().findContentItem("UnitsFound"); }]
    });

    lightSwitchApplication.AddEditStockCheckDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockCheckDetail
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditStockCheckDetail,
            data: lightSwitchApplication.AddEditStockCheckDetail,
            value: lightSwitchApplication.AddEditStockCheckDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditStockCheckDetail,
            data: lightSwitchApplication.AddEditStockCheckDetail,
            value: lightSwitchApplication.AddEditStockCheckDetail
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditStockCheckDetail,
            data: lightSwitchApplication.AddEditStockCheckDetail,
            value: lightSwitchApplication.Product
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Product",
            screen: lightSwitchApplication.AddEditStockCheckDetail,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        UnitsExpected: {
            _$class: msls.ContentItem,
            _$name: "UnitsExpected",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditStockCheckDetail,
            data: lightSwitchApplication.AddEditStockCheckDetail,
            value: Number
        },
        UnitsFound: {
            _$class: msls.ContentItem,
            _$name: "UnitsFound",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditStockCheckDetail,
            data: lightSwitchApplication.AddEditStockCheckDetail,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStockCheckDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditStockCheckDetail, {
        /// <field>
        /// Called when a new AddEditStockCheckDetail screen is created.
        /// <br/>created(msls.application.AddEditStockCheckDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditStockCheckDetail],
        /// <field>
        /// Called before changes on an active AddEditStockCheckDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditStockCheckDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditStockCheckDetail],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheckDetail().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheckDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheckDetail().findContentItem("Product"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheckDetail().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the UnitsExpected content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsExpected_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheckDetail().findContentItem("UnitsExpected"); }],
        /// <field>
        /// Called after the UnitsFound content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitsFound_postRender: [$element, function () { return new lightSwitchApplication.AddEditStockCheckDetail().findContentItem("UnitsFound"); }]
    });

    lightSwitchApplication.AddEditSupplier.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSupplier
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.AddEditSupplier,
            value: lightSwitchApplication.AddEditSupplier
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.AddEditSupplier,
            value: lightSwitchApplication.Supplier
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Address: {
            _$class: msls.ContentItem,
            _$name: "Address",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        City: {
            _$class: msls.ContentItem,
            _$name: "City",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        State: {
            _$class: msls.ContentItem,
            _$name: "State",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Country: {
            _$class: msls.ContentItem,
            _$name: "Country",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        PostCode: {
            _$class: msls.ContentItem,
            _$name: "PostCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Phone2: {
            _$class: msls.ContentItem,
            _$name: "Phone2",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Fax: {
            _$class: msls.ContentItem,
            _$name: "Fax",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSupplier,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSupplier
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditSupplier, {
        /// <field>
        /// Called when a new AddEditSupplier screen is created.
        /// <br/>created(msls.application.AddEditSupplier screen)
        /// </field>
        created: [lightSwitchApplication.AddEditSupplier],
        /// <field>
        /// Called before changes on an active AddEditSupplier screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditSupplier screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditSupplier],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("left"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the Address content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Address"); }],
        /// <field>
        /// Called after the City content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        City_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("City"); }],
        /// <field>
        /// Called after the State content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        State_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("State"); }],
        /// <field>
        /// Called after the Country content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Country_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Country"); }],
        /// <field>
        /// Called after the PostCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PostCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("PostCode"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("right"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Phone2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone2_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Phone2"); }],
        /// <field>
        /// Called after the Fax content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fax_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Fax"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.AddEditSupplier().findContentItem("Website"); }]
    });

    lightSwitchApplication.BrowseCustomers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCustomers
        },
        CustomerList: {
            _$class: msls.ContentItem,
            _$name: "CustomerList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: lightSwitchApplication.BrowseCustomers
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "CustomerList",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: String
        },
        Customer: {
            _$class: msls.ContentItem,
            _$name: "Customer",
            _$parentName: "CustomerList",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCustomers,
                _$entry: {
                    elementType: lightSwitchApplication.Customer
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Customer",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.Customer
        },
        CustomerName: {
            _$class: msls.ContentItem,
            _$name: "CustomerName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        AddressLine1: {
            _$class: msls.ContentItem,
            _$name: "AddressLine1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        AddressLine2: {
            _$class: msls.ContentItem,
            _$name: "AddressLine2",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        PostCode: {
            _$class: msls.ContentItem,
            _$name: "PostCode",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCustomers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCustomers, {
        /// <field>
        /// Called when a new BrowseCustomers screen is created.
        /// <br/>created(msls.application.BrowseCustomers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCustomers],
        /// <field>
        /// Called before changes on an active BrowseCustomers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCustomers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCustomers],
        /// <field>
        /// Called after the CustomerList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CustomerList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Search"); }],
        /// <field>
        /// Called after the Customer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Customer_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Customer"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the CustomerName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerName_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CustomerName"); }],
        /// <field>
        /// Called after the AddressLine1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine1_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("AddressLine1"); }],
        /// <field>
        /// Called after the AddressLine2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine2_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("AddressLine2"); }],
        /// <field>
        /// Called after the PostCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PostCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("PostCode"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Website"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeeList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployees,
                _$entry: {
                    elementType: lightSwitchApplication.Employee
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Search"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Current"); }]
    });

    lightSwitchApplication.BrowseOrders.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseOrders
        },
        OrderList: {
            _$class: msls.ContentItem,
            _$name: "OrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.BrowseOrders,
            value: lightSwitchApplication.BrowseOrders
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "OrderList",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.BrowseOrders,
            value: String
        },
        Order: {
            _$class: msls.ContentItem,
            _$name: "Order",
            _$parentName: "OrderList",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.BrowseOrders,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseOrders,
                _$entry: {
                    elementType: lightSwitchApplication.Order
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Order",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Order
        },
        OrderReference: {
            _$class: msls.ContentItem,
            _$name: "OrderReference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.Order,
            value: String
        },
        OrderDate: {
            _$class: msls.ContentItem,
            _$name: "OrderDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.Order,
            value: Date
        },
        Customer: {
            _$class: msls.ContentItem,
            _$name: "Customer",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Customer
        },
        OrderPaidFor: {
            _$class: msls.ContentItem,
            _$name: "OrderPaidFor",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.Order,
            value: Boolean
        },
        DatePaid: {
            _$class: msls.ContentItem,
            _$name: "DatePaid",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseOrders,
            data: lightSwitchApplication.Order,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseOrders
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseOrders, {
        /// <field>
        /// Called when a new BrowseOrders screen is created.
        /// <br/>created(msls.application.BrowseOrders screen)
        /// </field>
        created: [lightSwitchApplication.BrowseOrders],
        /// <field>
        /// Called before changes on an active BrowseOrders screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseOrders screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseOrders],
        /// <field>
        /// Called after the OrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("OrderList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("Search"); }],
        /// <field>
        /// Called after the Order content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Order_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("Order"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the OrderReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("OrderReference"); }],
        /// <field>
        /// Called after the OrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("OrderDate"); }],
        /// <field>
        /// Called after the Customer content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Customer_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("Customer"); }],
        /// <field>
        /// Called after the OrderPaidFor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderPaidFor_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("OrderPaidFor"); }],
        /// <field>
        /// Called after the DatePaid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatePaid_postRender: [$element, function () { return new lightSwitchApplication.BrowseOrders().findContentItem("DatePaid"); }]
    });

    lightSwitchApplication.BrowseProductCategories.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProductCategories
        },
        ProductCategoryList: {
            _$class: msls.ContentItem,
            _$name: "ProductCategoryList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProductCategories,
            data: lightSwitchApplication.BrowseProductCategories,
            value: lightSwitchApplication.BrowseProductCategories
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ProductCategoryList",
            screen: lightSwitchApplication.BrowseProductCategories,
            data: lightSwitchApplication.BrowseProductCategories,
            value: String
        },
        ProductCategory: {
            _$class: msls.ContentItem,
            _$name: "ProductCategory",
            _$parentName: "ProductCategoryList",
            screen: lightSwitchApplication.BrowseProductCategories,
            data: lightSwitchApplication.BrowseProductCategories,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProductCategories,
                _$entry: {
                    elementType: lightSwitchApplication.ProductCategory
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProductCategory",
            screen: lightSwitchApplication.BrowseProductCategories,
            data: lightSwitchApplication.ProductCategory,
            value: lightSwitchApplication.ProductCategory
        },
        Category: {
            _$class: msls.ContentItem,
            _$name: "Category",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProductCategories,
            data: lightSwitchApplication.ProductCategory,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProductCategories
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProductCategories, {
        /// <field>
        /// Called when a new BrowseProductCategories screen is created.
        /// <br/>created(msls.application.BrowseProductCategories screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProductCategories],
        /// <field>
        /// Called before changes on an active BrowseProductCategories screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProductCategories screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProductCategories],
        /// <field>
        /// Called after the ProductCategoryList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategoryList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductCategories().findContentItem("ProductCategoryList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductCategories().findContentItem("Search"); }],
        /// <field>
        /// Called after the ProductCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategory_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductCategories().findContentItem("ProductCategory"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductCategories().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Category content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Category_postRender: [$element, function () { return new lightSwitchApplication.BrowseProductCategories().findContentItem("Category"); }]
    });

    lightSwitchApplication.BrowseProducts.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProducts
        },
        ProductList: {
            _$class: msls.ContentItem,
            _$name: "ProductList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.BrowseProducts,
            value: lightSwitchApplication.BrowseProducts
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ProductList",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.BrowseProducts,
            value: String
        },
        Product: {
            _$class: msls.ContentItem,
            _$name: "Product",
            _$parentName: "ProductList",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.BrowseProducts,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProducts,
                _$entry: {
                    elementType: lightSwitchApplication.Product
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Product",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ProductName: {
            _$class: msls.ContentItem,
            _$name: "ProductName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: String
        },
        ProductCategory: {
            _$class: msls.ContentItem,
            _$name: "ProductCategory",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.ProductCategory
        },
        UnitPrice: {
            _$class: msls.ContentItem,
            _$name: "UnitPrice",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: String
        },
        ReorderLevel: {
            _$class: msls.ContentItem,
            _$name: "ReorderLevel",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: Number
        },
        Discontinued: {
            _$class: msls.ContentItem,
            _$name: "Discontinued",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: Boolean
        },
        LeadTime: {
            _$class: msls.ContentItem,
            _$name: "LeadTime",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseProducts,
            data: lightSwitchApplication.Product,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProducts
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProducts, {
        /// <field>
        /// Called when a new BrowseProducts screen is created.
        /// <br/>created(msls.application.BrowseProducts screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProducts],
        /// <field>
        /// Called before changes on an active BrowseProducts screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProducts screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProducts],
        /// <field>
        /// Called after the ProductList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("Search"); }],
        /// <field>
        /// Called after the Product content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Product_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("Product"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProductName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductName"); }],
        /// <field>
        /// Called after the ProductCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategory_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ProductCategory"); }],
        /// <field>
        /// Called after the UnitPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitPrice_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("UnitPrice"); }],
        /// <field>
        /// Called after the ReorderLevel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReorderLevel_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("ReorderLevel"); }],
        /// <field>
        /// Called after the Discontinued content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Discontinued_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("Discontinued"); }],
        /// <field>
        /// Called after the LeadTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LeadTime_postRender: [$element, function () { return new lightSwitchApplication.BrowseProducts().findContentItem("LeadTime"); }]
    });

    lightSwitchApplication.BrowsePurchaseOrders.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePurchaseOrders
        },
        PurchaseOrderList: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.BrowsePurchaseOrders,
            value: lightSwitchApplication.BrowsePurchaseOrders
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "PurchaseOrderList",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.BrowsePurchaseOrders,
            value: String
        },
        PurchaseOrder: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrder",
            _$parentName: "PurchaseOrderList",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.BrowsePurchaseOrders,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePurchaseOrders,
                _$entry: {
                    elementType: lightSwitchApplication.PurchaseOrder
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "PurchaseOrder",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.PurchaseOrder
        },
        PurchaseOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrderNumber",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: String
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.Supplier
        },
        DatePurchaseOrderPlaced: {
            _$class: msls.ContentItem,
            _$name: "DatePurchaseOrderPlaced",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        DatePurchaseOrderRequired: {
            _$class: msls.ContentItem,
            _$name: "DatePurchaseOrderRequired",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        DatePurchaseOrderShipped: {
            _$class: msls.ContentItem,
            _$name: "DatePurchaseOrderShipped",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: Date
        },
        ShippingMethod: {
            _$class: msls.ContentItem,
            _$name: "ShippingMethod",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePurchaseOrders,
            data: lightSwitchApplication.PurchaseOrder,
            value: lightSwitchApplication.ShippingMethod
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePurchaseOrders
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePurchaseOrders, {
        /// <field>
        /// Called when a new BrowsePurchaseOrders screen is created.
        /// <br/>created(msls.application.BrowsePurchaseOrders screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePurchaseOrders],
        /// <field>
        /// Called before changes on an active BrowsePurchaseOrders screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePurchaseOrders screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePurchaseOrders],
        /// <field>
        /// Called after the PurchaseOrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("PurchaseOrderList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("Search"); }],
        /// <field>
        /// Called after the PurchaseOrder content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrder_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("PurchaseOrder"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("PurchaseOrderNumber"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the DatePurchaseOrderPlaced content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatePurchaseOrderPlaced_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("DatePurchaseOrderPlaced"); }],
        /// <field>
        /// Called after the DatePurchaseOrderRequired content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatePurchaseOrderRequired_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("DatePurchaseOrderRequired"); }],
        /// <field>
        /// Called after the DatePurchaseOrderShipped content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DatePurchaseOrderShipped_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("DatePurchaseOrderShipped"); }],
        /// <field>
        /// Called after the ShippingMethod content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShippingMethod_postRender: [$element, function () { return new lightSwitchApplication.BrowsePurchaseOrders().findContentItem("ShippingMethod"); }]
    });

    lightSwitchApplication.BrowseShippingMethods.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseShippingMethods
        },
        ShippingMethodList: {
            _$class: msls.ContentItem,
            _$name: "ShippingMethodList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseShippingMethods,
            data: lightSwitchApplication.BrowseShippingMethods,
            value: lightSwitchApplication.BrowseShippingMethods
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ShippingMethodList",
            screen: lightSwitchApplication.BrowseShippingMethods,
            data: lightSwitchApplication.BrowseShippingMethods,
            value: String
        },
        ShippingMethod: {
            _$class: msls.ContentItem,
            _$name: "ShippingMethod",
            _$parentName: "ShippingMethodList",
            screen: lightSwitchApplication.BrowseShippingMethods,
            data: lightSwitchApplication.BrowseShippingMethods,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseShippingMethods,
                _$entry: {
                    elementType: lightSwitchApplication.ShippingMethod
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ShippingMethod",
            screen: lightSwitchApplication.BrowseShippingMethods,
            data: lightSwitchApplication.ShippingMethod,
            value: lightSwitchApplication.ShippingMethod
        },
        Shipper: {
            _$class: msls.ContentItem,
            _$name: "Shipper",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseShippingMethods,
            data: lightSwitchApplication.ShippingMethod,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseShippingMethods
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseShippingMethods, {
        /// <field>
        /// Called when a new BrowseShippingMethods screen is created.
        /// <br/>created(msls.application.BrowseShippingMethods screen)
        /// </field>
        created: [lightSwitchApplication.BrowseShippingMethods],
        /// <field>
        /// Called before changes on an active BrowseShippingMethods screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseShippingMethods screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseShippingMethods],
        /// <field>
        /// Called after the ShippingMethodList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShippingMethodList_postRender: [$element, function () { return new lightSwitchApplication.BrowseShippingMethods().findContentItem("ShippingMethodList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseShippingMethods().findContentItem("Search"); }],
        /// <field>
        /// Called after the ShippingMethod content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShippingMethod_postRender: [$element, function () { return new lightSwitchApplication.BrowseShippingMethods().findContentItem("ShippingMethod"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseShippingMethods().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Shipper content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Shipper_postRender: [$element, function () { return new lightSwitchApplication.BrowseShippingMethods().findContentItem("Shipper"); }]
    });

    lightSwitchApplication.BrowseStockChecks.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStockChecks
        },
        StockCheckList: {
            _$class: msls.ContentItem,
            _$name: "StockCheckList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseStockChecks,
            data: lightSwitchApplication.BrowseStockChecks,
            value: lightSwitchApplication.BrowseStockChecks
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "StockCheckList",
            screen: lightSwitchApplication.BrowseStockChecks,
            data: lightSwitchApplication.BrowseStockChecks,
            value: String
        },
        StockCheck: {
            _$class: msls.ContentItem,
            _$name: "StockCheck",
            _$parentName: "StockCheckList",
            screen: lightSwitchApplication.BrowseStockChecks,
            data: lightSwitchApplication.BrowseStockChecks,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseStockChecks,
                _$entry: {
                    elementType: lightSwitchApplication.StockCheck
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "StockCheck",
            screen: lightSwitchApplication.BrowseStockChecks,
            data: lightSwitchApplication.StockCheck,
            value: lightSwitchApplication.StockCheck
        },
        StockCheckDate: {
            _$class: msls.ContentItem,
            _$name: "StockCheckDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockChecks,
            data: lightSwitchApplication.StockCheck,
            value: Date
        },
        StockCheckBy: {
            _$class: msls.ContentItem,
            _$name: "StockCheckBy",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseStockChecks,
            data: lightSwitchApplication.StockCheck,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "StockCheckBy",
            screen: lightSwitchApplication.BrowseStockChecks,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "StockCheckBy",
            screen: lightSwitchApplication.BrowseStockChecks,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStockChecks
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseStockChecks, {
        /// <field>
        /// Called when a new BrowseStockChecks screen is created.
        /// <br/>created(msls.application.BrowseStockChecks screen)
        /// </field>
        created: [lightSwitchApplication.BrowseStockChecks],
        /// <field>
        /// Called before changes on an active BrowseStockChecks screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseStockChecks screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseStockChecks],
        /// <field>
        /// Called after the StockCheckList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckList_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockChecks().findContentItem("StockCheckList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockChecks().findContentItem("Search"); }],
        /// <field>
        /// Called after the StockCheck content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheck_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockChecks().findContentItem("StockCheck"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockChecks().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the StockCheckDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockChecks().findContentItem("StockCheckDate"); }],
        /// <field>
        /// Called after the StockCheckBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheckBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockChecks().findContentItem("StockCheckBy"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockChecks().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseStockChecks().findContentItem("LastName"); }]
    });

    lightSwitchApplication.BrowseSuppliers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSuppliers
        },
        SupplierList: {
            _$class: msls.ContentItem,
            _$name: "SupplierList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.BrowseSuppliers,
            value: lightSwitchApplication.BrowseSuppliers
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "SupplierList",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.BrowseSuppliers,
            value: String
        },
        Supplier: {
            _$class: msls.ContentItem,
            _$name: "Supplier",
            _$parentName: "SupplierList",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.BrowseSuppliers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseSuppliers,
                _$entry: {
                    elementType: lightSwitchApplication.Supplier
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Supplier",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: lightSwitchApplication.Supplier
        },
        SupplierName: {
            _$class: msls.ContentItem,
            _$name: "SupplierName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Address: {
            _$class: msls.ContentItem,
            _$name: "Address",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        City: {
            _$class: msls.ContentItem,
            _$name: "City",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        PostCode: {
            _$class: msls.ContentItem,
            _$name: "PostCode",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseSuppliers,
            data: lightSwitchApplication.Supplier,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSuppliers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseSuppliers, {
        /// <field>
        /// Called when a new BrowseSuppliers screen is created.
        /// <br/>created(msls.application.BrowseSuppliers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseSuppliers],
        /// <field>
        /// Called before changes on an active BrowseSuppliers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseSuppliers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseSuppliers],
        /// <field>
        /// Called after the SupplierList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierList_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("SupplierList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("Search"); }],
        /// <field>
        /// Called after the Supplier content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Supplier_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("Supplier"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the SupplierName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SupplierName_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("SupplierName"); }],
        /// <field>
        /// Called after the Address content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Address_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("Address"); }],
        /// <field>
        /// Called after the City content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        City_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("City"); }],
        /// <field>
        /// Called after the PostCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PostCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("PostCode"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.BrowseSuppliers().findContentItem("Website"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ManageProducts: {
            _$class: msls.ContentItem,
            _$name: "ManageProducts",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        PurchaseOrders: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrders",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ManageOrders: {
            _$class: msls.ContentItem,
            _$name: "ManageOrders",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        StockCheck: {
            _$class: msls.ContentItem,
            _$name: "StockCheck",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        SettingsGroup: {
            _$class: msls.ContentItem,
            _$name: "SettingsGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ManageEmployees: {
            _$class: msls.ContentItem,
            _$name: "ManageEmployees",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageSuppliers: {
            _$class: msls.ContentItem,
            _$name: "ManageSuppliers",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageCustomers: {
            _$class: msls.ContentItem,
            _$name: "ManageCustomers",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageProductCategories: {
            _$class: msls.ContentItem,
            _$name: "ManageProductCategories",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ManageShippingMethods: {
            _$class: msls.ContentItem,
            _$name: "ManageShippingMethods",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }],
        /// <field>
        /// Called after the ManageProducts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageProducts_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageProducts"); }],
        /// <field>
        /// Called after the PurchaseOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrders_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("PurchaseOrders"); }],
        /// <field>
        /// Called after the ManageOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageOrders_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageOrders"); }],
        /// <field>
        /// Called after the StockCheck content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheck_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("StockCheck"); }],
        /// <field>
        /// Called after the SettingsGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SettingsGroup_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("SettingsGroup"); }],
        /// <field>
        /// Called after the ManageEmployees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageEmployees_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageEmployees"); }],
        /// <field>
        /// Called after the ManageSuppliers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageSuppliers_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageSuppliers"); }],
        /// <field>
        /// Called after the ManageCustomers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageCustomers_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageCustomers"); }],
        /// <field>
        /// Called after the ManageProductCategories content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageProductCategories_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageProductCategories"); }],
        /// <field>
        /// Called after the ManageShippingMethods content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageShippingMethods_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageShippingMethods"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        Menu: {
            _$class: msls.ContentItem,
            _$name: "Menu",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        ManageProducts: {
            _$class: msls.ContentItem,
            _$name: "ManageProducts",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        PurchaseOrders: {
            _$class: msls.ContentItem,
            _$name: "PurchaseOrders",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        ManageOrders: {
            _$class: msls.ContentItem,
            _$name: "ManageOrders",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        StockCheck: {
            _$class: msls.ContentItem,
            _$name: "StockCheck",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MobileHome
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Suppliers: {
            _$class: msls.ContentItem,
            _$name: "Suppliers",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Customers: {
            _$class: msls.ContentItem,
            _$name: "Customers",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        ProductCategories: {
            _$class: msls.ContentItem,
            _$name: "ProductCategories",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        ShippingMethods: {
            _$class: msls.ContentItem,
            _$name: "ShippingMethods",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the Menu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Menu_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Menu"); }],
        /// <field>
        /// Called after the ManageProducts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageProducts_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ManageProducts"); }],
        /// <field>
        /// Called after the PurchaseOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrders_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("PurchaseOrders"); }],
        /// <field>
        /// Called after the ManageOrders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageOrders_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ManageOrders"); }],
        /// <field>
        /// Called after the StockCheck content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StockCheck_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("StockCheck"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Settings"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Employees"); }],
        /// <field>
        /// Called after the Suppliers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Suppliers_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Suppliers"); }],
        /// <field>
        /// Called after the Customers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Customers_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Customers"); }],
        /// <field>
        /// Called after the ProductCategories content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductCategories_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ProductCategories"); }],
        /// <field>
        /// Called after the ShippingMethods content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShippingMethods_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShippingMethods"); }]
    });

}(msls.application));
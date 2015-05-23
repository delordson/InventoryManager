/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditCustomer(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCustomer screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Customer" type="msls.application.Customer">
        /// Gets or sets the customer for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCustomer.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCustomer", parameters);
    }

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function AddEditOrder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditOrder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Order" type="msls.application.Order">
        /// Gets or sets the order for this screen.
        /// </field>
        /// <field name="OrderDetails" type="msls.VisualCollection" elementType="msls.application.OrderDetail">
        /// Gets the orderDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditOrder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditOrder", parameters);
    }

    function AddEditOrderDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditOrderDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OrderDetail" type="msls.application.OrderDetail">
        /// Gets or sets the orderDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditOrderDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditOrderDetail", parameters);
    }

    function AddEditProduct(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProduct screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this screen.
        /// </field>
        /// <field name="OrderDetails" type="msls.VisualCollection" elementType="msls.application.OrderDetail">
        /// Gets the orderDetails for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetailsCollection" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetailsCollection for this screen.
        /// </field>
        /// <field name="StockCheckDetail" type="msls.VisualCollection" elementType="msls.application.StockCheckDetail">
        /// Gets the stockCheckDetail for this screen.
        /// </field>
        /// <field name="UnitsOnOrder" type="String">
        /// Gets or sets the unitsOnOrder for this screen.
        /// </field>
        /// <field name="UnitsOnHand" type="String">
        /// Gets or sets the unitsOnHand for this screen.
        /// </field>
        /// <field name="ProductSubscribers" type="msls.VisualCollection" elementType="msls.application.ProductSubscriber">
        /// Gets the productSubscribers for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProduct.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProduct", parameters);
    }

    function AddEditProductCategory(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProductCategory screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductCategory" type="msls.application.ProductCategory">
        /// Gets or sets the productCategory for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProductCategory.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProductCategory", parameters);
    }

    function AddEditProductSubscriber(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProductSubscriber screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductSubscriber" type="msls.application.ProductSubscriber">
        /// Gets or sets the productSubscriber for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProductSubscriber.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProductSubscriber", parameters);
    }

    function AddEditPurchaseOrder(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPurchaseOrder screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrder" type="msls.application.PurchaseOrder">
        /// Gets or sets the purchaseOrder for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetailsCollection" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetailsCollection for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPurchaseOrder.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPurchaseOrder", parameters);
    }

    function AddEditPurchaseOrderDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPurchaseOrderDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrderDetail" type="msls.application.PurchaseOrderDetail">
        /// Gets or sets the purchaseOrderDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPurchaseOrderDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPurchaseOrderDetail", parameters);
    }

    function AddEditShippingMethod(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditShippingMethod screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ShippingMethod" type="msls.application.ShippingMethod">
        /// Gets or sets the shippingMethod for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditShippingMethod.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditShippingMethod", parameters);
    }

    function AddEditStockCheck(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditStockCheck screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockCheck" type="msls.application.StockCheck">
        /// Gets or sets the stockCheck for this screen.
        /// </field>
        /// <field name="StockCheckDetailsCollection" type="msls.VisualCollection" elementType="msls.application.StockCheckDetail">
        /// Gets the stockCheckDetailsCollection for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditStockCheck.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditStockCheck", parameters);
    }

    function AddEditStockCheckDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditStockCheckDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockCheckDetail" type="msls.application.StockCheckDetail">
        /// Gets or sets the stockCheckDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditStockCheckDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditStockCheckDetail", parameters);
    }

    function AddEditSupplier(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSupplier screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Supplier" type="msls.application.Supplier">
        /// Gets or sets the supplier for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSupplier.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSupplier", parameters);
    }

    function BrowseCustomers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCustomers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Customers" type="msls.VisualCollection" elementType="msls.application.Customer">
        /// Gets the customers for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCustomers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCustomers", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employees" type="msls.VisualCollection" elementType="msls.application.Employee">
        /// Gets the employees for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseOrders(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseOrders screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Orders" type="msls.VisualCollection" elementType="msls.application.Order">
        /// Gets the orders for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseOrders.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseOrders", parameters);
    }

    function BrowseProductCategories(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProductCategories screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProductCategories" type="msls.VisualCollection" elementType="msls.application.ProductCategory">
        /// Gets the productCategories for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProductCategories.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProductCategories", parameters);
    }

    function BrowseProducts(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProducts screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Products" type="msls.VisualCollection" elementType="msls.application.Product">
        /// Gets the products for this screen.
        /// </field>
        /// <field name="PurchaseOrderDetailsCollection" type="msls.VisualCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetailsCollection for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProducts.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProducts", parameters);
    }

    function BrowsePurchaseOrders(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePurchaseOrders screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PurchaseOrders" type="msls.VisualCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the purchaseOrders for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePurchaseOrders.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePurchaseOrders", parameters);
    }

    function BrowseShippingMethods(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseShippingMethods screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ShippingMethods" type="msls.VisualCollection" elementType="msls.application.ShippingMethod">
        /// Gets the shippingMethods for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseShippingMethods.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseShippingMethods", parameters);
    }

    function BrowseStockChecks(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseStockChecks screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="StockChecks" type="msls.VisualCollection" elementType="msls.application.StockCheck">
        /// Gets the stockChecks for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseStockChecks.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseStockChecks", parameters);
    }

    function BrowseSuppliers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseSuppliers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Suppliers" type="msls.VisualCollection" elementType="msls.application.Supplier">
        /// Gets the suppliers for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseSuppliers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseSuppliers", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditCustomer: $defineScreen(AddEditCustomer, [
            { name: "Customer", kind: "local", type: lightSwitchApplication.Customer }
        ], [
        ]),

        AddEditEmployee: $defineScreen(AddEditEmployee, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee }
        ], [
        ]),

        AddEditOrder: $defineScreen(AddEditOrder, [
            { name: "Order", kind: "local", type: lightSwitchApplication.Order },
            {
                name: "OrderDetails", kind: "collection", elementType: lightSwitchApplication.OrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.Order) {
                        return this.owner.Order.details.properties.OrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product").expand("ShippingMethod");
                }
            }
        ], [
        ]),

        AddEditOrderDetail: $defineScreen(AddEditOrderDetail, [
            { name: "OrderDetail", kind: "local", type: lightSwitchApplication.OrderDetail }
        ], [
        ]),

        AddEditProduct: $defineScreen(AddEditProduct, [
            { name: "Product", kind: "local", type: lightSwitchApplication.Product },
            {
                name: "OrderDetails", kind: "collection", elementType: lightSwitchApplication.OrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.Product) {
                        return this.owner.Product.details.properties.OrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Order").expand("Product").expand("ShippingMethod");
                }
            },
            {
                name: "PurchaseOrderDetailsCollection", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.Product) {
                        return this.owner.Product.details.properties.PurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product");
                }
            },
            {
                name: "StockCheckDetail", kind: "collection", elementType: lightSwitchApplication.StockCheckDetail,
                getNavigationProperty: function () {
                    if (this.owner.Product) {
                        return this.owner.Product.details.properties.StockCheckDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("StockCheck").expand("Product");
                }
            },
            { name: "UnitsOnOrder", kind: "local", type: String },
            { name: "UnitsOnHand", kind: "local", type: String },
            {
                name: "ProductSubscribers", kind: "collection", elementType: lightSwitchApplication.ProductSubscriber,
                getNavigationProperty: function () {
                    if (this.owner.Product) {
                        return this.owner.Product.details.properties.ProductSubscribers;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Employee");
                }
            }
        ], [
        ]),

        AddEditProductCategory: $defineScreen(AddEditProductCategory, [
            { name: "ProductCategory", kind: "local", type: lightSwitchApplication.ProductCategory }
        ], [
        ]),

        AddEditProductSubscriber: $defineScreen(AddEditProductSubscriber, [
            { name: "ProductSubscriber", kind: "local", type: lightSwitchApplication.ProductSubscriber }
        ], [
        ]),

        AddEditPurchaseOrder: $defineScreen(AddEditPurchaseOrder, [
            { name: "PurchaseOrder", kind: "local", type: lightSwitchApplication.PurchaseOrder },
            {
                name: "PurchaseOrderDetailsCollection", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.PurchaseOrder) {
                        return this.owner.PurchaseOrder.details.properties.PurchaseOrderDetailsCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("PurchaseOrder").expand("Product");
                }
            }
        ], [
        ]),

        AddEditPurchaseOrderDetail: $defineScreen(AddEditPurchaseOrderDetail, [
            { name: "PurchaseOrderDetail", kind: "local", type: lightSwitchApplication.PurchaseOrderDetail }
        ], [
        ]),

        AddEditShippingMethod: $defineScreen(AddEditShippingMethod, [
            { name: "ShippingMethod", kind: "local", type: lightSwitchApplication.ShippingMethod }
        ], [
        ]),

        AddEditStockCheck: $defineScreen(AddEditStockCheck, [
            { name: "StockCheck", kind: "local", type: lightSwitchApplication.StockCheck },
            {
                name: "StockCheckDetailsCollection", kind: "collection", elementType: lightSwitchApplication.StockCheckDetail,
                getNavigationProperty: function () {
                    if (this.owner.StockCheck) {
                        return this.owner.StockCheck.details.properties.StockCheckDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Product");
                }
            }
        ], [
        ]),

        AddEditStockCheckDetail: $defineScreen(AddEditStockCheckDetail, [
            { name: "StockCheckDetail", kind: "local", type: lightSwitchApplication.StockCheckDetail }
        ], [
        ]),

        AddEditSupplier: $defineScreen(AddEditSupplier, [
            { name: "Supplier", kind: "local", type: lightSwitchApplication.Supplier }
        ], [
        ]),

        BrowseCustomers: $defineScreen(BrowseCustomers, [
            {
                name: "Customers", kind: "collection", elementType: lightSwitchApplication.Customer,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Customers.filter("((" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", CustomerName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Address)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", City)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", PostCode)") + "").orderBy("CustomerName");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            {
                name: "Employees", kind: "collection", elementType: lightSwitchApplication.Employee,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Employees.filter("(" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", FirstName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", LastName)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", UserName)") + "").orderBy("FirstName").thenBy("LastName");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseOrders: $defineScreen(BrowseOrders, [
            {
                name: "Orders", kind: "collection", elementType: lightSwitchApplication.Order,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Orders.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", OrderReference)") + "").expand("Customer");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseProductCategories: $defineScreen(BrowseProductCategories, [
            {
                name: "ProductCategories", kind: "collection", elementType: lightSwitchApplication.ProductCategory,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.ProductCategories.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Category)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseProducts: $defineScreen(BrowseProducts, [
            {
                name: "Products", kind: "collection", elementType: lightSwitchApplication.Product,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Products.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", ProductName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", ProductCategory/Category)") + "").orderBy("ProductName").expand("ProductCategory");
                }
            },
            {
                name: "PurchaseOrderDetailsCollection", kind: "collection", elementType: lightSwitchApplication.PurchaseOrderDetail,
                getNavigationProperty: function () {
                    if (this.owner.Products.selectedItem) {
                        return this.owner.Products.selectedItem.details.properties.PurchaseOrderDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowsePurchaseOrders: $defineScreen(BrowsePurchaseOrders, [
            {
                name: "PurchaseOrders", kind: "collection", elementType: lightSwitchApplication.PurchaseOrder,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.PurchaseOrders.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", PurchaseOrderNumber)") + "").expand("Supplier").expand("ShippingMethod");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseShippingMethods: $defineScreen(BrowseShippingMethods, [
            {
                name: "ShippingMethods", kind: "collection", elementType: lightSwitchApplication.ShippingMethod,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.ShippingMethods.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Shipper)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseStockChecks: $defineScreen(BrowseStockChecks, [
            {
                name: "StockChecks", kind: "collection", elementType: lightSwitchApplication.StockCheck,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.StockChecks.filter("" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", StockCheckBy/FirstName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", StockCheckBy/LastName)") + "").orderByDescending("StockCheckDate").expand("StockCheckBy");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseSuppliers: $defineScreen(BrowseSuppliers, [
            {
                name: "Suppliers", kind: "collection", elementType: lightSwitchApplication.Supplier,
                createQuery: function (Search) {
                    return this.dataWorkspace.ApplicationData.Suppliers.filter("((" + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", SupplierName)") + " or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", Address)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", City)") + ") or " + ((Search === undefined || Search === null) ? "true" : "substringof(" + $toODataString(Search, "String?") + ", PostCode)") + "").orderBy("SupplierName");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        MobileHome: $defineScreen(MobileHome, [
        ], [
        ]),

        showAddEditCustomer: $defineShowScreen(function showAddEditCustomer(Customer, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCustomer screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCustomer", parameters, options);
        }),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showAddEditOrder: $defineShowScreen(function showAddEditOrder(Order, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditOrder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditOrder", parameters, options);
        }),

        showAddEditOrderDetail: $defineShowScreen(function showAddEditOrderDetail(OrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditOrderDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditOrderDetail", parameters, options);
        }),

        showAddEditProduct: $defineShowScreen(function showAddEditProduct(Product, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProduct screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProduct", parameters, options);
        }),

        showAddEditProductCategory: $defineShowScreen(function showAddEditProductCategory(ProductCategory, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProductCategory screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProductCategory", parameters, options);
        }),

        showAddEditProductSubscriber: $defineShowScreen(function showAddEditProductSubscriber(ProductSubscriber, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProductSubscriber screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProductSubscriber", parameters, options);
        }),

        showAddEditPurchaseOrder: $defineShowScreen(function showAddEditPurchaseOrder(PurchaseOrder, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPurchaseOrder screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPurchaseOrder", parameters, options);
        }),

        showAddEditPurchaseOrderDetail: $defineShowScreen(function showAddEditPurchaseOrderDetail(PurchaseOrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPurchaseOrderDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPurchaseOrderDetail", parameters, options);
        }),

        showAddEditShippingMethod: $defineShowScreen(function showAddEditShippingMethod(ShippingMethod, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditShippingMethod screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditShippingMethod", parameters, options);
        }),

        showAddEditStockCheck: $defineShowScreen(function showAddEditStockCheck(StockCheck, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditStockCheck screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditStockCheck", parameters, options);
        }),

        showAddEditStockCheckDetail: $defineShowScreen(function showAddEditStockCheckDetail(StockCheckDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditStockCheckDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditStockCheckDetail", parameters, options);
        }),

        showAddEditSupplier: $defineShowScreen(function showAddEditSupplier(Supplier, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSupplier screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSupplier", parameters, options);
        }),

        showBrowseCustomers: $defineShowScreen(function showBrowseCustomers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCustomers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseCustomers", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseOrders: $defineShowScreen(function showBrowseOrders(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseOrders screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseOrders", parameters, options);
        }),

        showBrowseProductCategories: $defineShowScreen(function showBrowseProductCategories(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProductCategories screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProductCategories", parameters, options);
        }),

        showBrowseProducts: $defineShowScreen(function showBrowseProducts(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProducts screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProducts", parameters, options);
        }),

        showBrowsePurchaseOrders: $defineShowScreen(function showBrowsePurchaseOrders(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePurchaseOrders screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePurchaseOrders", parameters, options);
        }),

        showBrowseShippingMethods: $defineShowScreen(function showBrowseShippingMethods(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseShippingMethods screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseShippingMethods", parameters, options);
        }),

        showBrowseStockChecks: $defineShowScreen(function showBrowseStockChecks(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseStockChecks screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseStockChecks", parameters, options);
        }),

        showBrowseSuppliers: $defineShowScreen(function showBrowseSuppliers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseSuppliers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseSuppliers", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        })

    });

}(msls.application));

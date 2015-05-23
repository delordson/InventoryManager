/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Customer, {
        /// <field>
        /// Called when a new customer is created.
        /// <br/>created(msls.application.Customer entity)
        /// </field>
        created: [lightSwitchApplication.Customer]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.OrderDetail, {
        /// <field>
        /// Called when a new orderDetail is created.
        /// <br/>created(msls.application.OrderDetail entity)
        /// </field>
        created: [lightSwitchApplication.OrderDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.Order, {
        /// <field>
        /// Called when a new order is created.
        /// <br/>created(msls.application.Order entity)
        /// </field>
        created: [lightSwitchApplication.Order]
    });

    msls._addEntryPoints(lightSwitchApplication.ProductCategory, {
        /// <field>
        /// Called when a new productCategory is created.
        /// <br/>created(msls.application.ProductCategory entity)
        /// </field>
        created: [lightSwitchApplication.ProductCategory]
    });

    msls._addEntryPoints(lightSwitchApplication.Product, {
        /// <field>
        /// Called when a new product is created.
        /// <br/>created(msls.application.Product entity)
        /// </field>
        created: [lightSwitchApplication.Product]
    });

    msls._addEntryPoints(lightSwitchApplication.ProductSubscriber, {
        /// <field>
        /// Called when a new productSubscriber is created.
        /// <br/>created(msls.application.ProductSubscriber entity)
        /// </field>
        created: [lightSwitchApplication.ProductSubscriber]
    });

    msls._addEntryPoints(lightSwitchApplication.PurchaseOrderDetail, {
        /// <field>
        /// Called when a new purchaseOrderDetail is created.
        /// <br/>created(msls.application.PurchaseOrderDetail entity)
        /// </field>
        created: [lightSwitchApplication.PurchaseOrderDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.PurchaseOrder, {
        /// <field>
        /// Called when a new purchaseOrder is created.
        /// <br/>created(msls.application.PurchaseOrder entity)
        /// </field>
        created: [lightSwitchApplication.PurchaseOrder]
    });

    msls._addEntryPoints(lightSwitchApplication.ShippingMethod, {
        /// <field>
        /// Called when a new shippingMethod is created.
        /// <br/>created(msls.application.ShippingMethod entity)
        /// </field>
        created: [lightSwitchApplication.ShippingMethod]
    });

    msls._addEntryPoints(lightSwitchApplication.StockCheckDetail, {
        /// <field>
        /// Called when a new stockCheckDetail is created.
        /// <br/>created(msls.application.StockCheckDetail entity)
        /// </field>
        created: [lightSwitchApplication.StockCheckDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.StockCheck, {
        /// <field>
        /// Called when a new stockCheck is created.
        /// <br/>created(msls.application.StockCheck entity)
        /// </field>
        created: [lightSwitchApplication.StockCheck]
    });

    msls._addEntryPoints(lightSwitchApplication.Supplier, {
        /// <field>
        /// Called when a new supplier is created.
        /// <br/>created(msls.application.Supplier entity)
        /// </field>
        created: [lightSwitchApplication.Supplier]
    });

}(msls.application));

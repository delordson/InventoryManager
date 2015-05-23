/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Customer(entitySet) {
        /// <summary>
        /// Represents the Customer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this customer.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this customer.
        /// </field>
        /// <field name="CustomerName" type="String">
        /// Gets or sets the customerName for this customer.
        /// </field>
        /// <field name="Address" type="String">
        /// Gets or sets the address for this customer.
        /// </field>
        /// <field name="City" type="String">
        /// Gets or sets the city for this customer.
        /// </field>
        /// <field name="State" type="String">
        /// Gets or sets the state for this customer.
        /// </field>
        /// <field name="Country" type="String">
        /// Gets or sets the country for this customer.
        /// </field>
        /// <field name="PostCode" type="String">
        /// Gets or sets the postCode for this customer.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this customer.
        /// </field>
        /// <field name="Phone1" type="String">
        /// Gets or sets the phone1 for this customer.
        /// </field>
        /// <field name="Phone2" type="String">
        /// Gets or sets the phone2 for this customer.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this customer.
        /// </field>
        /// <field name="Website" type="String">
        /// Gets or sets the website for this customer.
        /// </field>
        /// <field name="Orders" type="msls.EntityCollection" elementType="msls.application.Order">
        /// Gets the orders for this customer.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this customer.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this customer.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this customer.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this customer.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this customer.
        /// </field>
        /// <field name="details" type="msls.application.Customer.Details">
        /// Gets the details for this customer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// This is the user name of the 
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="Current" type="Boolean">
        /// Gets or sets the current for this employee.
        /// </field>
        /// <field name="Orders" type="msls.EntityCollection" elementType="msls.application.Order">
        /// Gets the orders for this employee.
        /// </field>
        /// <field name="StockChecks" type="msls.EntityCollection" elementType="msls.application.StockCheck">
        /// Gets the stockChecks for this employee.
        /// </field>
        /// <field name="ProductSubscribers" type="msls.EntityCollection" elementType="msls.application.ProductSubscriber">
        /// Gets the productSubscribers for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function OrderDetail(entitySet) {
        /// <summary>
        /// Represents the OrderDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this orderDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this orderDetail.
        /// </field>
        /// <field name="Order" type="msls.application.Order">
        /// Gets or sets the order for this orderDetail.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this orderDetail.
        /// </field>
        /// <field name="UnitsOrdered" type="Number">
        /// Gets or sets the unitsOrdered for this orderDetail.
        /// </field>
        /// <field name="UnitsShipped" type="Number">
        /// Gets or sets the unitsShipped for this orderDetail.
        /// </field>
        /// <field name="DateOrderShipped" type="Date">
        /// Gets or sets the dateOrderShipped for this orderDetail.
        /// </field>
        /// <field name="ShippingMethod" type="msls.application.ShippingMethod">
        /// Gets or sets the shippingMethod for this orderDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this orderDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this orderDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this orderDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this orderDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this orderDetail.
        /// </field>
        /// <field name="details" type="msls.application.OrderDetail.Details">
        /// Gets the details for this orderDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Order(entitySet) {
        /// <summary>
        /// Represents the Order entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this order.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this order.
        /// </field>
        /// <field name="OrderReference" type="String">
        /// Gets or sets the orderReference for this order.
        /// </field>
        /// <field name="OrderDate" type="Date">
        /// Gets or sets the orderDate for this order.
        /// </field>
        /// <field name="Customer" type="msls.application.Customer">
        /// Gets or sets the customer for this order.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this order.
        /// </field>
        /// <field name="OrderPaidFor" type="Boolean">
        /// Gets or sets the orderPaidFor for this order.
        /// </field>
        /// <field name="DatePaid" type="Date">
        /// Gets or sets the datePaid for this order.
        /// </field>
        /// <field name="OrderDetails" type="msls.EntityCollection" elementType="msls.application.OrderDetail">
        /// Gets the orderDetails for this order.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this order.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this order.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this order.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this order.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this order.
        /// </field>
        /// <field name="details" type="msls.application.Order.Details">
        /// Gets the details for this order.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProductCategory(entitySet) {
        /// <summary>
        /// Represents the ProductCategory entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this productCategory.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this productCategory.
        /// </field>
        /// <field name="Category" type="String">
        /// Gets or sets the category for this productCategory.
        /// </field>
        /// <field name="Products" type="msls.EntityCollection" elementType="msls.application.Product">
        /// Gets the products for this productCategory.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this productCategory.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this productCategory.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this productCategory.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this productCategory.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this productCategory.
        /// </field>
        /// <field name="details" type="msls.application.ProductCategory.Details">
        /// Gets the details for this productCategory.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Product(entitySet) {
        /// <summary>
        /// Represents the Product entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this product.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this product.
        /// </field>
        /// <field name="ProductName" type="String">
        /// Gets or sets the productName for this product.
        /// </field>
        /// <field name="ProductDescription" type="String">
        /// Gets or sets the productDescription for this product.
        /// </field>
        /// <field name="ProductCategory" type="msls.application.ProductCategory">
        /// Gets or sets the productCategory for this product.
        /// </field>
        /// <field name="UnitPrice" type="String">
        /// Gets or sets the unitPrice for this product.
        /// </field>
        /// <field name="ReorderLevel" type="Number">
        /// Gets or sets the reorderLevel for this product.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this product.
        /// </field>
        /// <field name="LeadTime" type="String">
        /// Gets or sets the leadTime for this product.
        /// </field>
        /// <field name="OrderDetails" type="msls.EntityCollection" elementType="msls.application.OrderDetail">
        /// Gets the orderDetails for this product.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.EntityCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetails for this product.
        /// </field>
        /// <field name="StockCheckDetails" type="msls.EntityCollection" elementType="msls.application.StockCheckDetail">
        /// Gets the stockCheckDetails for this product.
        /// </field>
        /// <field name="ProductSubscribers" type="msls.EntityCollection" elementType="msls.application.ProductSubscriber">
        /// Gets the productSubscribers for this product.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this product.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this product.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this product.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this product.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this product.
        /// </field>
        /// <field name="details" type="msls.application.Product.Details">
        /// Gets the details for this product.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProductSubscriber(entitySet) {
        /// <summary>
        /// Represents the ProductSubscriber entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this productSubscriber.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this productSubscriber.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this productSubscriber.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this productSubscriber.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this productSubscriber.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this productSubscriber.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this productSubscriber.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this productSubscriber.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this productSubscriber.
        /// </field>
        /// <field name="details" type="msls.application.ProductSubscriber.Details">
        /// Gets the details for this productSubscriber.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PurchaseOrderDetail(entitySet) {
        /// <summary>
        /// Represents the PurchaseOrderDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this purchaseOrderDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this purchaseOrderDetail.
        /// </field>
        /// <field name="PurchaseOrder" type="msls.application.PurchaseOrder">
        /// Gets or sets the purchaseOrder for this purchaseOrderDetail.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this purchaseOrderDetail.
        /// </field>
        /// <field name="UnitsOrdered" type="Number">
        /// Gets or sets the unitsOrdered for this purchaseOrderDetail.
        /// </field>
        /// <field name="Discount" type="String">
        /// Gets or sets the discount for this purchaseOrderDetail.
        /// </field>
        /// <field name="UnitPricePaid" type="String">
        /// Gets or sets the unitPricePaid for this purchaseOrderDetail.
        /// </field>
        /// <field name="UnitsReceived" type="Number">
        /// Gets or sets the unitsReceived for this purchaseOrderDetail.
        /// </field>
        /// <field name="DateRecieved" type="Date">
        /// Gets or sets the dateRecieved for this purchaseOrderDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this purchaseOrderDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this purchaseOrderDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this purchaseOrderDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this purchaseOrderDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this purchaseOrderDetail.
        /// </field>
        /// <field name="details" type="msls.application.PurchaseOrderDetail.Details">
        /// Gets the details for this purchaseOrderDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PurchaseOrder(entitySet) {
        /// <summary>
        /// Represents the PurchaseOrder entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this purchaseOrder.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this purchaseOrder.
        /// </field>
        /// <field name="PurchaseOrderNumber" type="String">
        /// Gets or sets the purchaseOrderNumber for this purchaseOrder.
        /// </field>
        /// <field name="PurchaseOrderDescription" type="String">
        /// Gets or sets the purchaseOrderDescription for this purchaseOrder.
        /// </field>
        /// <field name="Supplier" type="msls.application.Supplier">
        /// Gets or sets the supplier for this purchaseOrder.
        /// </field>
        /// <field name="DatePurchaseOrderPlaced" type="Date">
        /// Gets or sets the datePurchaseOrderPlaced for this purchaseOrder.
        /// </field>
        /// <field name="DatePurchaseOrderRequired" type="Date">
        /// Gets or sets the datePurchaseOrderRequired for this purchaseOrder.
        /// </field>
        /// <field name="DatePurchaseOrderShipped" type="Date">
        /// Gets or sets the datePurchaseOrderShipped for this purchaseOrder.
        /// </field>
        /// <field name="ShippingMethod" type="msls.application.ShippingMethod">
        /// Gets or sets the shippingMethod for this purchaseOrder.
        /// </field>
        /// <field name="PurchaseOrderDetailsCollection" type="msls.EntityCollection" elementType="msls.application.PurchaseOrderDetail">
        /// Gets the purchaseOrderDetailsCollection for this purchaseOrder.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this purchaseOrder.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this purchaseOrder.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this purchaseOrder.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this purchaseOrder.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this purchaseOrder.
        /// </field>
        /// <field name="details" type="msls.application.PurchaseOrder.Details">
        /// Gets the details for this purchaseOrder.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ShippingMethod(entitySet) {
        /// <summary>
        /// Represents the ShippingMethod entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this shippingMethod.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this shippingMethod.
        /// </field>
        /// <field name="Shipper" type="String">
        /// Gets or sets the shipper for this shippingMethod.
        /// </field>
        /// <field name="PurchaseOrders" type="msls.EntityCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the purchaseOrders for this shippingMethod.
        /// </field>
        /// <field name="OrderDetails" type="msls.EntityCollection" elementType="msls.application.OrderDetail">
        /// Gets the orderDetails for this shippingMethod.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this shippingMethod.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this shippingMethod.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this shippingMethod.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this shippingMethod.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this shippingMethod.
        /// </field>
        /// <field name="details" type="msls.application.ShippingMethod.Details">
        /// Gets the details for this shippingMethod.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StockCheckDetail(entitySet) {
        /// <summary>
        /// Represents the StockCheckDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stockCheckDetail.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stockCheckDetail.
        /// </field>
        /// <field name="StockCheck" type="msls.application.StockCheck">
        /// Gets or sets the stockCheck for this stockCheckDetail.
        /// </field>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this stockCheckDetail.
        /// </field>
        /// <field name="UnitsExpected" type="Number">
        /// Gets or sets the unitsExpected for this stockCheckDetail.
        /// </field>
        /// <field name="UnitsFound" type="Number">
        /// Gets or sets the unitsFound for this stockCheckDetail.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stockCheckDetail.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stockCheckDetail.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stockCheckDetail.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stockCheckDetail.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stockCheckDetail.
        /// </field>
        /// <field name="details" type="msls.application.StockCheckDetail.Details">
        /// Gets the details for this stockCheckDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StockCheck(entitySet) {
        /// <summary>
        /// Represents the StockCheck entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this stockCheck.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this stockCheck.
        /// </field>
        /// <field name="StockCheckDate" type="Date">
        /// Gets or sets the stockCheckDate for this stockCheck.
        /// </field>
        /// <field name="StockCheckBy" type="msls.application.Employee">
        /// Gets or sets the stockCheckBy for this stockCheck.
        /// </field>
        /// <field name="StockCheckDetails" type="msls.EntityCollection" elementType="msls.application.StockCheckDetail">
        /// Gets the stockCheckDetails for this stockCheck.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this stockCheck.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this stockCheck.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this stockCheck.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this stockCheck.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this stockCheck.
        /// </field>
        /// <field name="details" type="msls.application.StockCheck.Details">
        /// Gets the details for this stockCheck.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Supplier(entitySet) {
        /// <summary>
        /// Represents the Supplier entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this supplier.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this supplier.
        /// </field>
        /// <field name="SupplierName" type="String">
        /// Gets or sets the supplierName for this supplier.
        /// </field>
        /// <field name="Address" type="String">
        /// Gets or sets the address for this supplier.
        /// </field>
        /// <field name="City" type="String">
        /// Gets or sets the city for this supplier.
        /// </field>
        /// <field name="State" type="String">
        /// Gets or sets the state for this supplier.
        /// </field>
        /// <field name="Country" type="String">
        /// Gets or sets the country for this supplier.
        /// </field>
        /// <field name="PostCode" type="String">
        /// Gets or sets the postCode for this supplier.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this supplier.
        /// </field>
        /// <field name="Phone1" type="String">
        /// Gets or sets the phone1 for this supplier.
        /// </field>
        /// <field name="Phone2" type="String">
        /// Gets or sets the phone2 for this supplier.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this supplier.
        /// </field>
        /// <field name="Website" type="String">
        /// Gets or sets the website for this supplier.
        /// </field>
        /// <field name="PurchaseOrders" type="msls.EntityCollection" elementType="msls.application.PurchaseOrder">
        /// Gets the purchaseOrders for this supplier.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this supplier.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this supplier.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this supplier.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this supplier.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this supplier.
        /// </field>
        /// <field name="details" type="msls.application.Supplier.Details">
        /// Gets the details for this supplier.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Customers" type="msls.EntitySet">
        /// Gets the Customers entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="OrderDetails" type="msls.EntitySet">
        /// Gets the OrderDetails entity set.
        /// </field>
        /// <field name="Orders" type="msls.EntitySet">
        /// Gets the Orders entity set.
        /// </field>
        /// <field name="ProductCategories" type="msls.EntitySet">
        /// Gets the ProductCategories entity set.
        /// </field>
        /// <field name="Products" type="msls.EntitySet">
        /// Gets the Products entity set.
        /// </field>
        /// <field name="ProductSubscribers" type="msls.EntitySet">
        /// Gets the ProductSubscribers entity set.
        /// </field>
        /// <field name="PurchaseOrderDetails" type="msls.EntitySet">
        /// Gets the PurchaseOrderDetails entity set.
        /// </field>
        /// <field name="PurchaseOrders" type="msls.EntitySet">
        /// Gets the PurchaseOrders entity set.
        /// </field>
        /// <field name="ShippingMethods" type="msls.EntitySet">
        /// Gets the ShippingMethods entity set.
        /// </field>
        /// <field name="StockCheckDetails" type="msls.EntitySet">
        /// Gets the StockCheckDetails entity set.
        /// </field>
        /// <field name="StockChecks" type="msls.EntitySet">
        /// Gets the StockChecks entity set.
        /// </field>
        /// <field name="Suppliers" type="msls.EntitySet">
        /// Gets the Suppliers entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Customer: $defineEntity(Customer, [
            { name: "Id", type: Number },
            { name: "CustomerName", type: String },
            { name: "Address", type: String },
            { name: "City", type: String },
            { name: "State", type: String },
            { name: "Country", type: String },
            { name: "PostCode", type: String },
            { name: "Email", type: String },
            { name: "Phone1", type: String },
            { name: "Phone2", type: String },
            { name: "Fax", type: String },
            { name: "Website", type: String },
            { name: "Orders", kind: "collection", elementType: Order },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "UserName", type: String },
            { name: "Email", type: String },
            { name: "Current", type: Boolean },
            { name: "Orders", kind: "collection", elementType: Order },
            { name: "StockChecks", kind: "collection", elementType: StockCheck },
            { name: "ProductSubscribers", kind: "collection", elementType: ProductSubscriber },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        OrderDetail: $defineEntity(OrderDetail, [
            { name: "Id", type: Number },
            { name: "Order", kind: "reference", type: Order },
            { name: "Product", kind: "reference", type: Product },
            { name: "UnitsOrdered", type: Number },
            { name: "UnitsShipped", type: Number },
            { name: "DateOrderShipped", type: Date },
            { name: "ShippingMethod", kind: "reference", type: ShippingMethod },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Order: $defineEntity(Order, [
            { name: "Id", type: Number },
            { name: "OrderReference", type: String },
            { name: "OrderDate", type: Date },
            { name: "Customer", kind: "reference", type: Customer },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "OrderPaidFor", type: Boolean },
            { name: "DatePaid", type: Date },
            { name: "OrderDetails", kind: "collection", elementType: OrderDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProductCategory: $defineEntity(ProductCategory, [
            { name: "Id", type: Number },
            { name: "Category", type: String },
            { name: "Products", kind: "collection", elementType: Product },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Product: $defineEntity(Product, [
            { name: "Id", type: Number },
            { name: "ProductName", type: String },
            { name: "ProductDescription", type: String },
            { name: "ProductCategory", kind: "reference", type: ProductCategory },
            { name: "UnitPrice", type: String },
            { name: "ReorderLevel", type: Number },
            { name: "Discontinued", type: Boolean },
            { name: "LeadTime", type: String },
            { name: "OrderDetails", kind: "collection", elementType: OrderDetail },
            { name: "PurchaseOrderDetails", kind: "collection", elementType: PurchaseOrderDetail },
            { name: "StockCheckDetails", kind: "collection", elementType: StockCheckDetail },
            { name: "ProductSubscribers", kind: "collection", elementType: ProductSubscriber },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProductSubscriber: $defineEntity(ProductSubscriber, [
            { name: "Id", type: Number },
            { name: "Product", kind: "reference", type: Product },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        PurchaseOrderDetail: $defineEntity(PurchaseOrderDetail, [
            { name: "Id", type: Number },
            { name: "PurchaseOrder", kind: "reference", type: PurchaseOrder },
            { name: "Product", kind: "reference", type: Product },
            { name: "UnitsOrdered", type: Number },
            { name: "Discount", type: String },
            { name: "UnitPricePaid", type: String },
            { name: "UnitsReceived", type: Number },
            { name: "DateRecieved", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        PurchaseOrder: $defineEntity(PurchaseOrder, [
            { name: "Id", type: Number },
            { name: "PurchaseOrderNumber", type: String },
            { name: "PurchaseOrderDescription", type: String },
            { name: "Supplier", kind: "reference", type: Supplier },
            { name: "DatePurchaseOrderPlaced", type: Date },
            { name: "DatePurchaseOrderRequired", type: Date },
            { name: "DatePurchaseOrderShipped", type: Date },
            { name: "ShippingMethod", kind: "reference", type: ShippingMethod },
            { name: "PurchaseOrderDetailsCollection", kind: "collection", elementType: PurchaseOrderDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ShippingMethod: $defineEntity(ShippingMethod, [
            { name: "Id", type: Number },
            { name: "Shipper", type: String },
            { name: "PurchaseOrders", kind: "collection", elementType: PurchaseOrder },
            { name: "OrderDetails", kind: "collection", elementType: OrderDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StockCheckDetail: $defineEntity(StockCheckDetail, [
            { name: "Id", type: Number },
            { name: "StockCheck", kind: "reference", type: StockCheck },
            { name: "Product", kind: "reference", type: Product },
            { name: "UnitsExpected", type: Number },
            { name: "UnitsFound", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        StockCheck: $defineEntity(StockCheck, [
            { name: "Id", type: Number },
            { name: "StockCheckDate", type: Date },
            { name: "StockCheckBy", kind: "reference", type: Employee },
            { name: "StockCheckDetails", kind: "collection", elementType: StockCheckDetail },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Supplier: $defineEntity(Supplier, [
            { name: "Id", type: Number },
            { name: "SupplierName", type: String },
            { name: "Address", type: String },
            { name: "City", type: String },
            { name: "State", type: String },
            { name: "Country", type: String },
            { name: "PostCode", type: String },
            { name: "Email", type: String },
            { name: "Phone1", type: String },
            { name: "Phone2", type: String },
            { name: "Fax", type: String },
            { name: "Website", type: String },
            { name: "PurchaseOrders", kind: "collection", elementType: PurchaseOrder },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Customers", elementType: Customer },
            { name: "Employees", elementType: Employee },
            { name: "OrderDetails", elementType: OrderDetail },
            { name: "Orders", elementType: Order },
            { name: "ProductCategories", elementType: ProductCategory },
            { name: "Products", elementType: Product },
            { name: "ProductSubscribers", elementType: ProductSubscriber },
            { name: "PurchaseOrderDetails", elementType: PurchaseOrderDetail },
            { name: "PurchaseOrders", elementType: PurchaseOrder },
            { name: "ShippingMethods", elementType: ShippingMethod },
            { name: "StockCheckDetails", elementType: StockCheckDetail },
            { name: "StockChecks", elementType: StockCheck },
            { name: "Suppliers", elementType: Supplier }
        ], [
            {
                name: "Customers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Customers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Customers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "OrderDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.OrderDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/OrderDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Orders_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Orders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Orders(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProductCategories_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProductCategories },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProductCategories(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Products_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Products },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Products(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProductSubscribers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProductSubscribers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProductSubscribers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PurchaseOrderDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.PurchaseOrderDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PurchaseOrderDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PurchaseOrders_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.PurchaseOrders },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/PurchaseOrders(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ShippingMethods_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ShippingMethods },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ShippingMethods(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StockCheckDetails_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StockCheckDetails },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockCheckDetails(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StockChecks_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.StockChecks },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/StockChecks(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Suppliers_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Suppliers },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Suppliers(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));

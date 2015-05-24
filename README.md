<h2>Inventory Manager</h2>
There are three ways in which inventory in this App can change. Users can raise purchase orders (PO) with their suppliers to bring new stock in. When a PO is raised, the inventory is ‘On Order’ but not yet ‘On Hand’. When the stock is received the inventory is ‘On Hand’. As the business receives orders from their customers and fulfil those orders, they reduce their ‘On Hand’ inventory. The business might in addition carry out periodic stock checks and record any inventory lost. All this is taken into account when calculating the ‘On Hand’ inventory for any product.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/Main.png"><img class="alignnone size-full wp-image-1837" alt="Main" src="https://github.com/delordson/InventoryManager/blob/master/Resources/Main.png" width="937" height="579" /></a>

The Inventory Manager App is a tool for monitoring inventory levels for a small business. The Inventory Manager App allows organisation to record purchase orders and when these are fulfilled, record customers orders and when these are dispatched as well as to carry out periodic stock checks to update inventory levels.

&nbsp;

<h2>Modules</h2>
The Inventory Manager App Home Page provides easy access the primary modules which include the Product Manager Module,  the Purchase Order Module, the Manage Orders Module and the Stock Check module. In addition, the Setting tab of the Home page includes modules for managing Employees, Suppliers, Customers, Product Categories and Shipping Methods.

&nbsp;

&nbsp;
<h2>Access</h2>
Access is controlled through a log in screen. The administrator uses an associated Silverlight application to configure new users, create roles and permissions for those roles as well as to assign users to roles.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/183134_Login.png"><img class="alignnone size-large wp-image-1937" alt="183134_Login" src="https://github.com/delordson/InventoryManager/blob/master/Resources/183134_Login.png" width="700" height="393" /></a>
<h2></h2>
<h2>The Home Screen</h2>
The Home screen provides a main menu for accessing the App modules…

&nbsp;

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_090821.png"><img title="screenshot_04192014_090821" alt="screenshot_04192014_090821" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_090821.png" width="644" height="364" /></a>

&nbsp;
<h2></h2>
…as well as a module for accessing the settings.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_090936.png"><img class="alignnone size-large wp-image-1880" alt="screenshot_04192014_090936" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_090936.png" width="700" height="393" /></a>
<h2></h2>
<h2>Purchase Orders</h2>
The business adds to its inventory of products by raising PO’s with its suppliers. Clicking or tabbing on the Purchase Orders button takes the user to the ‘Browse Purchase Orders’ Page. On this page, the user is presented with a list of all PO’s. A search box is present for quickly navigating to a required PO’s.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073528.png"><img class="alignnone size-large wp-image-1842" alt="screenshot_04192014_073528" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073528.png" width="700" height="393" /></a>

&nbsp;

Clicking or tabbing on any PO listed takes the user to a page for managing that PO. The ‘Add’ button allows new PO’s to be raised.

The PO page is laid out in a two tabs. The ‘Details’ tab presents key information about the PO such as the PO Number, the date raised date raised, the date the order is required by and the shipping method.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073534.png"><img class="alignnone size-large wp-image-1843" alt="screenshot_04192014_073534" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073534.png" width="700" height="393" /></a>

&nbsp;

The PO Details tab contains a list of products included in that purchase order.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073537.png"><img class="alignnone size-large wp-image-1844" alt="screenshot_04192014_073537" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073537.png" width="700" height="393" /></a>

&nbsp;

Clicking or tabbing on any items in the PO opens it for edit. New products can be added to the PO by clicking or tabbing on the ‘Add’ button.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073541.png"><img class="alignnone size-large wp-image-1845" alt="screenshot_04192014_073541" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073541.png" width="700" height="393" /></a>

&nbsp;

Of course the built in LightSwitch validation of required fields and field lengths works great as expected…

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_075633.png"><img class="alignnone size-large wp-image-1876" alt="screenshot_04192014_075633" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_075633.png" width="700" height="393" /></a>

…but we’ve also added business logic where it makes sense. So you can’t set the reorder level to a negative number.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_080222.png"><img class="alignnone size-large wp-image-1878" alt="screenshot_04192014_080222" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_080222.png" width="700" height="393" /></a>

&nbsp;

<strong>Orders</strong>

Orders from customers are managed using the ‘Manage Orders’ module. Clicking or tabbing on the Manage Orders button takes the user to the ‘Browse Orders’ Page. On this page, the user is presented with a list of all Orders from customers. A search box is present for quickly navigating to a required Order.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073555.png"><img class="alignnone size-large wp-image-1846" alt="screenshot_04192014_073555" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073555.png" width="700" height="393" /></a>

&nbsp;

Clicking or tabbing on any Order listed takes the user to a page for editing the Order. The ‘Add’ button allows new Orders to be raised.

The  page is laid out in a two tabs. The ‘Order Info’ tab presents key information about the Order such as the Order reference, the order date, the customer and the payment details.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073559.png"><img class="alignnone size-large wp-image-1847" alt="screenshot_04192014_073559" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073559.png" width="700" height="393" /></a>

&nbsp;

The ‘Order Details’ tab contains a list of products for the order.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073602.png"><img class="alignnone size-large wp-image-1848" alt="screenshot_04192014_073602" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073602.png" width="700" height="393" /></a>

&nbsp;

New products can be added to the order by clicking or tabbing on the ‘Add’ button. Exiting products on the order can be edited by clicking or tabbing on the product.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073606.png"><img class="alignnone size-large wp-image-1849" alt="screenshot_04192014_073606" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073606.png" width="700" height="393" /></a>

&nbsp;

<strong>Stock Checks</strong>

The business can carry out periodic stock checks and record these using the ‘Stock Check’ module. Clicking or tabbing on the Stock Check button takes the user to the ‘Browse Stock Checks’ Page. On this page, the user is presented with a list of all Stock Checks previously undertaken. A search box is present for quickly navigating to a required Stock Check.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073615.png"><img class="alignnone size-large wp-image-1850" alt="screenshot_04192014_073615" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073615.png" width="700" height="393" /></a>

&nbsp;

Clicking or tabbing on any Stock Check listed takes the user to a page for editing the Stock Check. The ‘Add’ button allows new Stock Checks to be created.

The  page is laid out in a two tabs. The ‘Stock Check Info’ tab presents key information about the Stock check such as the date carried out and the name of the employee who carried it out.

&nbsp;

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073621.png"><img class="alignnone size-large wp-image-1851" alt="screenshot_04192014_073621" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073621.png" width="700" height="393" /></a>

&nbsp;

The ‘Stock Check Details’ tab lists the products for which a stock or inventory check was carried out and for each, it presents the number that were expected to be ‘On Hand’ and the number that were found to be available.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073625.png"><img class="alignnone size-large wp-image-1852" alt="screenshot_04192014_073625" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073625.png" width="700" height="393" /></a>

&nbsp;

New product stock checks can be included by clicking or tabbing on the ‘Add’ button. Exiting products on the stock check can be editing by clicking or tabbing on the product. This opens the ‘Add Edit Stock Check Details’ dialog. In this dialog, we calculate and present to the user the number of units ‘Expected’ to be on hand based on purchase orders raised and received, orders placed by customers and fulfilled and inventory shrinkage based on previous stock checks. This is a read only field. The user completes the ‘Units Found’ field after undertaking the inventory check.
<pre>myapp.AddEditStockCheckDetail.created = function (screen) {
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
};</pre>
<style type="text/css"><!--
.csharpcode, .csharpcode pre     {     font-size: small;     color: black;     font-family: consolas, "Courier New", courier, monospace;     background-color: #ffffff;     /*white-space: pre;*/     }     .csharpcode pre { margin: 0em; }     .csharpcode .rem { color: #008000; }     .csharpcode .kwrd { color: #0000ff; }     .csharpcode .str { color: #006080; }     .csharpcode .op { color: #0000c0; }     .csharpcode .preproc { color: #cc6633; }     .csharpcode .asp { background-color: #ffff00; }     .csharpcode .html { color: #800000; }     .csharpcode .attr { color: #ff0000; }     .csharpcode .alt     {     background-color: #f4f4f4;     width: 100%;     margin: 0em;     }     .csharpcode .lnum { color: #606060; }
--></style>&nbsp;

&nbsp;

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073630.png"><img class="alignnone size-large wp-image-1853" alt="screenshot_04192014_073630" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073630.png" width="700" height="393" /></a>

&nbsp;

<strong>Manage Products</strong>

The ‘Manage Products’ module is the key place for reviewing the inventory levels for individual products. From the main menu, clicking or tabbing on the Manage Products button takes the user to the ‘Browse Products’ Page. On this page, the user is presented with a list of all Products on the inventory. A search box is present for quickly navigating to a required Product.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073640.png"><img class="alignnone size-large wp-image-1854" alt="screenshot_04192014_073640" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073640.png" width="700" height="393" /></a>

&nbsp;

Clicking or tabbing on any Product listed takes the user to a page for editing the Product. The ‘Add’ button allows new Products to be added to the inventory.

The  page is laid out in a five tabs. The ‘Details’ tab, the ‘Purchase Orders’ tab, the ‘Orders’ tab, the ‘Stock Check’ tab and the ‘Product Subscribers’ tab.

&nbsp;

The ‘Details’ tab presents key information about the Product such as the product name, category and descriptions as well as the re-order level and lead time. We also calculate and present the number of units ‘On Hand’ and the number ‘On Order’. The number of units ‘On Hand’ is based on purchase orders raised and received, orders placed by customers and fulfilled and inventory shrinkage recorded during stock checks. The number of units ‘On Order’ is based on purchase order placed but for which the orders have not yet been received.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073646.png"><img class="alignnone size-large wp-image-1855" alt="screenshot_04192014_073646" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073646.png" width="700" height="393" /></a>

&nbsp;

The list of PO’s this product has been a part of is presented in the ‘Purchase Orders’ tab. New PO’s cannot be raised from this tab but existing PO’s can be edited.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073709.png"><img class="alignnone size-large wp-image-1856" alt="screenshot_04192014_073709" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073709.png" width="700" height="393" /></a>

The list of Orders this product has been a part of is presented in the ‘Orders’ tab. New Orders cannot be raised from this tab but existing Orders can be edited.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073719.png"><img class="alignnone size-large wp-image-1858" alt="screenshot_04192014_073719" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073719.png" width="700" height="393" /></a>

The list of Stock Checks this product has been a part of is presented in the ‘Stock Checks’ tab. New Stock Checks cannot be raised from this tab but existing Stock Checks can be edited.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073727.png"><img class="alignnone size-large wp-image-1860" alt="screenshot_04192014_073727" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073727.png" width="700" height="393" /></a>

The ‘Product Subscribers’ tab allows employees to register an interest in a particular product and be alerted by email when the inventory level of that product drops to or below the reorder level.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073736.png"><img class="alignnone size-large wp-image-1862" alt="screenshot_04192014_073736" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073736.png" width="700" height="393" /></a>

When inventory levels fall to or below reorder levels, all product subscribers are sent an email like this…

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/email.png"><img class="alignnone size-full wp-image-1836" alt="email" src="https://github.com/delordson/InventoryManager/blob/master/Resources/email.png" width="878" height="402" /></a>

&nbsp;

'…the email includes details such as the number of units On Hand, the reorder level and the number of unit On Order.

&nbsp;

<strong>Settings</strong>

The Inventory Manager App allows users with the right permissions to edit various settings such as lists of employees, suppliers, customers, product categories and shipping methods.

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073820.png"><img class="alignnone size-large wp-image-1864" alt="screenshot_04192014_073820" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073820.png" width="700" height="393" /></a>

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073830.png"><img class="alignnone size-large wp-image-1866" alt="screenshot_04192014_073830" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073830.png" width="700" height="393" /></a>

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073849.png"><img class="alignnone size-large wp-image-1868" alt="screenshot_04192014_073849" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073849.png" width="700" height="393" /></a>

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073903.png"><img class="alignnone size-large wp-image-1870" alt="screenshot_04192014_073903" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073903.png" width="700" height="393" /></a>

<a href="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073912.png"><img class="alignnone size-large wp-image-1872" alt="screenshot_04192014_073912" src="https://github.com/delordson/InventoryManager/blob/master/Resources/screenshot_04192014_073912.png" width="700" height="393" /></a>

&nbsp;
<h2>Summary</h2>
The Inventory Manager App is a fully featured complete LightSwitch html5 line of business application which you can extend and adapt to your specific needs. This is a fully featured complete LightSwitch html5 line of business application which you can extend and adapt to your specific needs.


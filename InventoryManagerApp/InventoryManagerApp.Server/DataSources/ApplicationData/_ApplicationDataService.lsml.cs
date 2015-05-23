using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;
namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void Customers_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditCustomers);
        }

        partial void Customers_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditCustomers);
        }

        partial void Customers_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditCustomers);
        }

        partial void Employees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void OrderDetails_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditOrderDetails);
        }

        partial void OrderDetails_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditOrderDetails);
        }

        partial void OrderDetails_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditOrderDetails);
        }

        partial void Orders_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditOrders);
        }

        partial void Orders_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditOrders);
        }

        partial void Orders_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditOrders);
        }

        partial void ProductCategories_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProductCategories);
        }

        partial void ProductCategories_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProductCategories);
        }

        partial void ProductCategories_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProductCategories);
        }

        partial void Products_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProducts);
        }

        partial void Products_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProducts);
        }

        partial void Products_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProducts);
        }

        partial void ProductSubscribers_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProductSubscribers);
        }

        partial void ProductSubscribers_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProductSubscribers);
        }

        partial void ProductSubscribers_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProductSubscribers);
        }

        partial void PurchaseOrderDetails_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrderDetails);
        }

        partial void PurchaseOrderDetails_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrderDetails);
        }

        partial void PurchaseOrderDetails_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrderDetails);
        }

        partial void ShippingMethods_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditShippingMethods);
        }

        partial void ShippingMethods_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditShippingMethods);
        }

        partial void ShippingMethods_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditShippingMethods);
        }

        partial void PurchaseOrders_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrders);
        }

        partial void PurchaseOrders_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrders);
        }

        partial void PurchaseOrders_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditPurchaseOrders);
        }

        partial void StockCheckDetails_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditStockCheckDetails);
        }

        partial void StockCheckDetails_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditStockCheckDetails);
        }

        partial void StockCheckDetails_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditStockCheckDetails);
        }

        partial void StockChecks_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditStockChecks);
        }

        partial void StockChecks_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditStockChecks);
        }

        partial void StockChecks_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditStockChecks);
        }

        partial void Suppliers_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditSuppliers);
        }

        partial void Suppliers_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditSuppliers);
        }

        partial void Suppliers_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditSuppliers);
        }

        partial void PurchaseOrders_Validate(PurchaseOrder entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DatePurchaseOrderPlaced != null & entity.DatePurchaseOrderRequired != null)
            {
                if (entity.DatePurchaseOrderRequired < entity.DatePurchaseOrderPlaced)
                {
                    results.AddEntityError("The order required date cannot be earlier than the date order placed");
                }
            }

            if (entity.DatePurchaseOrderPlaced != null & entity.DatePurchaseOrderShipped != null)
            {
                if (entity.DatePurchaseOrderShipped < entity.DatePurchaseOrderPlaced)
                {
                    results.AddEntityError("The shipped date cannot be earlier than the date order placed");
                }
            }
        }

        partial void Orders_Validate(Order entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.OrderDate != null & entity.DatePaid != null)
            {
                if (entity.DatePaid < entity.OrderDate)
                {
                    results.AddEntityError("The order cannot be paid foe before it is placced");
                }
            }
        }

        partial void OrderDetails_Validate(OrderDetail entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DateOrderShipped != null & entity.Order.OrderDate != null)
            {
                if (entity.DateOrderShipped < entity.Order.OrderDate)
                {
                    results.AddEntityError("The order cannot be shipped before it is placed");
                }
            }
        }

        partial void PurchaseOrderDetails_Validate(PurchaseOrderDetail entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DateRecieved != null & entity.PurchaseOrder.DatePurchaseOrderPlaced != null)
            {
                if (entity.DateRecieved < entity.PurchaseOrder.DatePurchaseOrderPlaced)
                {
                    results.AddEntityError("The purchase order product cannot be recieved before the purchase order is placed");
                }
            }
        }

        partial void Products_Updated(Product entity)
        {
            OnProductStatusAffected(entity);
        }

        partial void PurchaseOrderDetails_Inserted(PurchaseOrderDetail entity)
        {
            OnProductStatusAffected(entity.Product);
        }

        partial void PurchaseOrderDetails_Updated(PurchaseOrderDetail entity)
        {
            OnProductStatusAffected(entity.Product);
        }

        partial void OrderDetails_Inserted(OrderDetail entity)
        {
            OnProductStatusAffected(entity.Product);
        }

        partial void OrderDetails_Updated(OrderDetail entity)
        {
            OnProductStatusAffected(entity.Product);
        }

        partial void StockCheckDetails_Inserted(StockCheckDetail entity)
        {
            OnProductStatusAffected(entity.Product);
        }

        partial void StockCheckDetails_Updated(StockCheckDetail entity)
        {
            OnProductStatusAffected(entity.Product);
        }

        private void OnProductStatusAffected(Product product)
        {
            var unitsReceived = 0;
            var unitsShipped = 0;
            var unitsLost = 0;
            var unitsOnHand = 0;
            var unitsOnOrder = 0;

            var purchaseOrderDetails = product.PurchaseOrderDetails;
            foreach (var purchaseOrderDetail in purchaseOrderDetails)
            {
                unitsReceived += purchaseOrderDetail.UnitsReceived.Value;
                unitsOnOrder += purchaseOrderDetail.UnitsOrdered - purchaseOrderDetail.UnitsReceived.Value;
            }

            var orderDetails = product.OrderDetails;
            foreach (var orderDetail in orderDetails)
            {
                unitsShipped += orderDetail.UnitsShipped.Value;
            }

            var stockCheckDetails = product.StockCheckDetails;
            foreach (var stockCheckDetail in stockCheckDetails)
            {
                unitsLost += stockCheckDetail.UnitsExpected - stockCheckDetail.UnitsFound;
            }

            unitsOnHand = unitsReceived - (unitsShipped + unitsLost);

            if (unitsOnHand <= product.ReorderLevel)
            {
                string subject = string.Format("{0} at or below reorder levels", product.ProductName);

                foreach (var subscriber in product.ProductSubscribers)
                {
                    List<string> mailTos = new List<string>();

                    string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The product '{2}' is at or below the reorder level:<br></br>The reorder level is {3} but you currently only have {4} on hand.<br></br>For info, the number of units on order is {5}.</p></body></html>", subscriber.Employee.FirstName, subscriber.Employee.LastName, product.ProductName, product.ReorderLevel, unitsOnHand, unitsOnOrder);

                    mailTos.Add(subscriber.Employee.Email);

                    SendEmail(mailTos, subject, message);
                }
            }
        }

        private void SendEmail(List<string> mailTos, string subject, string message)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                if (mailTos.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();

                    mailHelper.SendMail(mailTos, subject, message);
                }
            }
        }
    }
}

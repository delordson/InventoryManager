using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class StockCheck
    {
        partial void StockCheckDate_Validate(EntityValidationResultsBuilder results)
        {
            if (this.StockCheckDate != null)
            {
                if (this.StockCheckDate > DateTime.Today)
                {
                    results.AddPropertyError("Cannot add a future stock check date");
                }
            }
        }
    }
}

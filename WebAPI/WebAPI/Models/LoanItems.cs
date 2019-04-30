using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class LoanItem
    {
        public int id { get; set; }
        public string name { get; set; }
        public double repayment { get; set; }
        public double funding { get; set; }
    }
}

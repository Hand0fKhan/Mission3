using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Models
{
    public class GradeCalcModel
    {
        [Required]
        public int Assignments { get; set;  }
        [Required]
        public int Projects { get; set; }
        [Required]
        public int Quiz { get; set; }
        [Required]
        public int Test { get; set; }
        [Required]
        public int Intex { get; set; }
    }
}


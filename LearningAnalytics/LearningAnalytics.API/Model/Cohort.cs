using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices.ComTypes;

namespace LearningAnalytics.API.Model
{
    public class Cohort
    {
        public int Id { get; set; }

        public int Year { get; set; }

        public string DisplayName { get; set; }

        public IEnumerable<Student> Students { get; set; }
    }
}
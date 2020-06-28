using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearningAnalytics.API.Model
{
    public class Student
    {
        public int Id { get; set; }

        public string Registration { get; set; }

        public string FirstName { get; set; }

        public string Surname { get; set; }

        public int CohortId { get; set; }

        //public virtual Cohort Cohort { get; set; }
    }
}

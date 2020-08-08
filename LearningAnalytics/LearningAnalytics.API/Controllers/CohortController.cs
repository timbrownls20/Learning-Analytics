using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearningAnalytics.API.Data;
using LearningAnalytics.API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LearningAnalytics.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CohortController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public CohortController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Cohort
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cohort>>> GetCohort()
        {
            return await _context.Cohorts.ToListAsync();
        }

        // GET: api/Cohort/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cohort>> GetCohort(int id)
        {
            var cohort = await _context.Cohorts.FindAsync(id);

            if (cohort == null)
            {
                return NotFound();
            }

            return cohort;
        }

        // PUT: api/Cohort/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCohort(int id, Cohort cohort)
        {
            if (id != cohort.Year)
            {
                return BadRequest();
            }

            _context.Entry(cohort).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CohortExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cohort
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Cohort>> PostCohort(Cohort cohort)
        {
            _context.Cohorts.Add(cohort);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCohort", new { id = cohort.Year }, cohort);
        }

        // DELETE: api/Cohort/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cohort>> DeleteCohort(int id)
        {
            var cohort = await _context.Cohorts.FindAsync(id);
            if (cohort == null)
            {
                return NotFound();
            }

            _context.Cohorts.Remove(cohort);
            await _context.SaveChangesAsync();

            return cohort;
        }

        private bool CohortExists(int id)
        {
            return _context.Cohorts.Any(e => e.Year == id);
        }
    }
}

using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private readonly LoanContext _context;

        public LoanController(LoanContext context)
        {
            _context = context;
        }

        // GET: api/Loan
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoanItem>>> GetLoanItems()
        {
            return await _context.LoanItems.ToListAsync();
        }

        // GET: api/Loan/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LoanItem>> GetLoanItem(int id)
        {
            var loanItem = await _context.LoanItems.FindAsync(id);

            if (loanItem == null)
            {
                return NotFound();
            }

            return loanItem;
        }

        // POST: api/Loan
        [HttpPost]
        public async Task<ActionResult<LoanItem>> PostLoanItem(LoanItem loanItem)
        {
            _context.LoanItems.Add(loanItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLoanItem", new { id = loanItem.id }, loanItem);
        }

        // PUT: api/Loan/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLoanItem(int id, LoanItem loanItem)
        {
            if (id != loanItem.id)
            {
                return BadRequest();
            }

            _context.Entry(loanItem).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Loan/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LoanItem>> DeleteLoanItem(int id)
        {
            var loanItem = await _context.LoanItems.FindAsync(id);
            if (loanItem == null)
            {
                return NotFound();
            }

            _context.LoanItems.Remove(loanItem);
            await _context.SaveChangesAsync();

            return loanItem;
        }
    }
}
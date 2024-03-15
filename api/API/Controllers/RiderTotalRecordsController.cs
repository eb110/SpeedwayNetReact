using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RiderTotalRecordsController : ControllerBase
    {
        private readonly SpeedwayContext _context;

        public RiderTotalRecordsController(SpeedwayContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<SpeedwayRiderTotalRecord>>> GetTotalRecords()
        {
            var totalRecords = await _context.SpeedwayRiderTotalRecords.ToListAsync();
            return Ok(totalRecords);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SpeedwayRiderTotalRecord>> GetTotalRecord(int id)
        {
            var totalRecord = await _context.SpeedwayRiderTotalRecords.SingleAsync(record => record.Id == id);
            return Ok(totalRecord);
        }
    }
}

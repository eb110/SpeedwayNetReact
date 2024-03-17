using API.Data;
using API.DTOs;
using API.Entities;
using API.RequestHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SpeedwayRiderController : ControllerBase
    {
        private readonly SpeedwayContext _context;

        public SpeedwayRiderController(SpeedwayContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<SpeedwayRider>>> GetRiders()
        {
            var riders = await _context.SpeedwayRider.ToListAsync();
            return Ok(riders);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SpeedwayRider>> GetRiderById(int id)
        {
            var rider = await _context.SpeedwayRider.SingleAsync(record => record.Id == id);
            return Ok(rider);
        }

        [HttpGet("riders")]
        public async Task<ActionResult<SpeedwayRidersDto>> GetRidersByParams([FromQuery] RidersParams ridersParams)
        {
            var riders = await _context.SpeedwayRider.ToListAsync();
            var ridersDto = new SpeedwayRidersDto();
            foreach (var riderParam in ridersParams.Riders)
            {
                var rider = riders.FirstOrDefault(x =>
            x.Name.Substring(0, riderParam.Name.Length).Equals(riderParam.Name) &&
            x.Surname.Equals(riderParam.Surname) &&
            (riderParam.GameDate - x.BirthDate).TotalDays > 5840 &&
            (riderParam.GameDate - x.BirthDate).TotalDays < 18250);
                var riderDto = new SpeedwayRiderDto();
                if (rider != null)
                {
                    riderDto.Name = rider.Name;
                    riderDto.Surname = rider.Surname;
                    riderDto.BirthDate = rider.BirthDate;
                    riderDto.Nationality = rider.Nationality;
                    ridersDto.SpeedwayRiders.Add(riderDto);
                }
            }
            return Ok(ridersDto);
        }
    }
}

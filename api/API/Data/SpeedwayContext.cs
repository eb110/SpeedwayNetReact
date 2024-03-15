using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class SpeedwayContext : DbContext
    {
        public SpeedwayContext(DbContextOptions options): base(options)
        {
            
        }

        public DbSet<SpeedwayRiderTotalRecord> SpeedwayRiderTotalRecords { get; set; }
    }
}

using API.Entities;

namespace API.Data
{
    public static class DBInitializer
    {
        public static void Initialize(SpeedwayContext context)
        {
            if (context.SpeedwayRiderTotalRecords.Any()) return;

            var records = new List<SpeedwayRiderTotalRecord>()
            {
                new SpeedwayRiderTotalRecord()
                {
                    Point = 3, Match = 1, Race = 2
                },
                 new SpeedwayRiderTotalRecord()
                {
                    Point = 35, Match = 6, Race = 22
                },
                  new SpeedwayRiderTotalRecord()
                {
                    Point = 23, Match = 4, Race = 15
                },
                   new SpeedwayRiderTotalRecord()
                {
                    Point = 43, Match = 8, Race = 22
                },
            };

            foreach(var record in records)
            {
                context.SpeedwayRiderTotalRecords.Add(record);
            }

            context.SaveChanges();
        }
    }
}

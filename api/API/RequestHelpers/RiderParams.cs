namespace API.RequestHelpers
{
    public class RidersParams
    {
        public RiderParams[] Riders { get; set; }
    }
    public class RiderParams
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime GameDate { get; set; }
    }
}

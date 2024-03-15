using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using dotenv.net;

var builder = WebApplication.CreateBuilder(args);

DotEnv.Load();
var envVars = DotEnv.Read();
Console.WriteLine("dupa " + envVars["Default"]);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<SpeedwayContext>(opt =>
{
   // opt.UseMySQL(builder.Configuration.GetConnectionString("Default")!);
    opt.UseMySQL(envVars["Default"]);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<SpeedwayContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
    context.Database.Migrate();
    DBInitializer.Initialize(context);
}
catch (Exception ex)
{
    logger.LogError(ex, "problem with migration => go to program.cs 'db initialize'");
}

app.Run();
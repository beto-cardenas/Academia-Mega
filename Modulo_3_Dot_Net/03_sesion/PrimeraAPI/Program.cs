var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//app.UseHttpsRedirection();

app.MapGet("/saludo", () =>"Hola esta es mi primera API en .NET 6.0");
app.MapGet("/saludo/{nombre}", (string nombre) => $"Hola {nombre}, esta es mi primera API en .NET 6.0");

app.Run();

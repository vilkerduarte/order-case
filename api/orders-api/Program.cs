using Npgsql;
using orders_api.Services;
using orders_api.Models;
var builder = WebApplication.CreateBuilder(args);

var connectionString = Environment.GetEnvironmentVariable("ConnectionStrings__DefaultConnection")
    ?? builder.Configuration.GetConnectionString("DefaultConnection");
Console.WriteLine($"🔍 String de conexão usada: {connectionString}");

builder.Services.AddCors(options => {
    options.AddPolicy("AllowAnyOrigin", policy =>
    {
        policy.AllowAnyOrigin()          // Permite qualquer origem
              .AllowAnyMethod()           // Permite qualquer método HTTP (GET, POST, etc.)
              .AllowAnyHeader();         // Permite qualquer cabeçalho
    });
});

builder.Services.AddSingleton(new OrderService(connectionString));

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors("AllowAnyOrigin");
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}else{
    app.UseHttpsRedirection();
}


app.MapGet("/orders", async (OrderService orderService) =>
{
    var orders = orderService.GetOrders();
    return Results.Ok(orders);
}).WithOpenApi();

app.MapGet("/orders/{id}", async (Guid id, OrderService orderService) =>
{
    var order = orderService.GetOrderById(id);
    if (order == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(order);
}).WithOpenApi();

app.MapPost("/orders", async (Order order, OrderService orderService) =>
{
    Console.Write(order);
    if (order == null || string.IsNullOrEmpty(order.Cliente) || string.IsNullOrEmpty(order.Produto))
    {
        return Results.BadRequest("Dados inválidos.");
    }

    // Gerar valores automáticos para "id", "status" e "data_criacao"
    order.Id = Guid.NewGuid(); // Gerar o UUID para o campo "id"
    order.Status = "Pendente"; // Definir o status como "Pendente" por padrão
    order.DataCriacao = DateTime.Now; // Definir a data de criação com o horário atual

    // Adicionar a ordem ao banco de dados
    orderService.AddOrder(order);

    // Retornar a ordem criada com o status 201 (Created)
    return Results.Created($"/orders/{order.Id}", order);
}).WithOpenApi();

app.Run();
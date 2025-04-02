using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;
namespace orders_api.Models;

public class NewOrder
{
    public required string Cliente { get; set; }
    public required string Produto { get; set; }
    public required decimal Valor { get; set; }
}
public class Order
{
    [AllowNull]
    public Guid Id { get; set; }
    public required string Cliente { get; set; }
    public required string Produto { get; set; }
    public required decimal Valor { get; set; }
    [AllowNull]
    public string Status { get; set; } // Pendente, Processando, Finalizado
    [AllowNull]
    public DateTime DataCriacao { get; set; }
}

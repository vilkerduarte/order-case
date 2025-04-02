using Npgsql;
using orders_api.Models;

namespace orders_api.Services;
public class OrderService
{
    private readonly string _connectionString;

    public OrderService(string connectionString)
    {
        _connectionString = connectionString;

        try
        {
            using var connection = new NpgsqlConnection(connectionString);
            connection.Open();
            Console.WriteLine("✅ Conexão com o banco estabelecida!");
            CreateTableIfNotExists(connection);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Erro ao conectar ao banco: {ex.Message}");
            Environment.Exit(1);
        }

    }

    private void CreateTableIfNotExists(NpgsqlConnection connection)
    {
        string createTableSql = @"
            CREATE TABLE IF NOT EXISTS orders (
                id UUID PRIMARY KEY,
                cliente VARCHAR(255),
                produto VARCHAR(255),
                valor DECIMAL(10, 2),
                status VARCHAR(20),
                data_criacao TIMESTAMP
            );
        ";

        using var cmd = new NpgsqlCommand(createTableSql, connection);
        cmd.ExecuteNonQuery();
    }
    public List<Order> GetOrders()
    {
        var orders = new List<Order>();

        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            var sql = "SELECT id, cliente, produto, valor, status, data_criacao FROM orders";
            using var cmd = new NpgsqlCommand(sql, connection);
            using var reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                orders.Add(new Order
                {
                    Id = reader.GetGuid(0),
                    Cliente = reader.GetString(1),
                    Produto = reader.GetString(2),
                    Valor = reader.GetDecimal(3),
                    Status = reader.GetString(4),
                    DataCriacao = reader.GetDateTime(5)
                });
            }
        }

        return orders;
    }
    public Order GetOrderById(Guid id)
    {
        using var connection = new NpgsqlConnection(_connectionString);
        connection.Open();
        var sql = "SELECT id, cliente, produto, valor, status, data_criacao FROM orders WHERE id = @id";
        using var cmd = new NpgsqlCommand(sql, connection);
        cmd.Parameters.AddWithValue("id", id);
        using var reader = cmd.ExecuteReader();

        if (reader.Read())
        {
            return new Order
            {
                Id = reader.GetGuid(0),
                Cliente = reader.GetString(1),
                Produto = reader.GetString(2),
                Valor = reader.GetDecimal(3),
                Status = reader.GetString(4),
                DataCriacao = reader.GetDateTime(5)
            };
        }

        return null;
    }

    public void AddOrder(Order order)
    {
        using var connection = new NpgsqlConnection(_connectionString);
        connection.Open();

        var sql = @"
        INSERT INTO orders (id, cliente, produto, valor, status, data_criacao)
        VALUES (@id, @cliente, @produto, @valor, @status, @data_criacao)";

        using var cmd = new NpgsqlCommand(sql, connection);
        cmd.Parameters.AddWithValue("id", order.Id);
        cmd.Parameters.AddWithValue("cliente", order.Cliente);
        cmd.Parameters.AddWithValue("produto", order.Produto);
        cmd.Parameters.AddWithValue("valor", order.Valor);
        cmd.Parameters.AddWithValue("status", "Pendente");
        cmd.Parameters.AddWithValue("data_criacao", order.DataCriacao);

        cmd.ExecuteNonQuery();
    }
}
curl -X POST "http://localhost:5015/orders" -H "Content-Type: application/json" -d '{"cliente": "João da Silva","produto": "Cadeira de escritório","valor": 299.99,"status": "Pendente","data_criacao": "2025-04-02T10:00:00"}'
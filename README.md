# Aplicação C# - Instruções de Build e Execução

Este repositório contém uma aplicação C# utilizando ASP.NET Core para gerenciamento de ordens. A seguir, você encontrará instruções detalhadas para construir e rodar a aplicação, além de configurar a connection string para o banco de dados.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas na sua máquina:

- [.NET SDK 6.0+](https://dotnet.microsoft.com/download/dotnet)
- [PostgreSQL](https://www.postgresql.org/download/) (ou outro banco de dados compatível com a connection string fornecida)
- Um editor de código como [Visual Studio Code](https://code.visualstudio.com/) ou [Visual Studio](https://visualstudio.microsoft.com/)

## Configuração da Connection String

A aplicação necessita de uma connection string para se conectar ao banco de dados. Siga os passos abaixo para configurar a connection string no arquivo `appsettings.json`.

### Passo 1: Localize o arquivo `appsettings.json`

Dentro da raiz do seu projeto, localize o arquivo `appsettings.json`. Ele contém a configuração do banco de dados e outras variáveis de ambiente.

### Passo 2: Insira a Connection String

Abra o arquivo `appsettings.json` e localize a seção `"ConnectionStrings"`. Adicione sua connection string personalizada para o banco de dados da seguinte forma:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=myserver;Port=5432;Username=mylogin;Password=mypassword;Database=mydatabase"
  }
}
```
# Configurando o FrontEnd


## Primeiros Passos

Primeiro, Insira o link do Servidor Backend no arquivo `/public/app.json`.

Em seguida execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)


## Ambiente de Produção
Execute o comando de compilação:

```bash
npx next build
```

E estando compilado, basta executar:
```bash
npx next start -p {PORT}
```
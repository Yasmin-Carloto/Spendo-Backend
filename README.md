# Spendo - backend (Em andamento)
O Spendo é uma aplicação voltada para o controle das finanças do usuário.
Este é o repositório do back-end desta aplicação.

## 🔧 Tecnologias Utilizadas
- **Node.js + Express:** Servidor e gerenciamento de rotas
- **Sequelize + Sequelize CLI:** ORM para acesso ao banco de dados relacional
- **MySQL:** Banco de dados relacional
- **bcrypt:** Criptografia de senhas
- **body-parser:** Conversão de dados recebidos em JSON
- **dotenv:** Variáveis de ambiente
- **express-validator:** Validação de dados de entrada
- **http-errors:** Tratamento de erros HTTP
- **nodemon:** Monitoramento automático em ambiente de desenvolvimento
- **pm2:** Gerenciamento de processos em produção

## 🛠️ Como rodar o back-end localmente
1. Clone o repositório:
```
git clone
```

2. Se você não possuir, instale o (Docker Desktop)[https://www.docker.com/products/docker-desktop/].

3. Configure o Docker Desktop.

4. Entre no diretório onde está o repositório clonado.

5. Crie o arquivo `.env`.

6. Adicione neste arquivo as seguintes variáveis de ambiente:
```
API_PORT=           # Porta em que a API deve ser executada
DATABASE_USER=      # Usuário do Banco de Dados
DATABASE_PASSWORD=  # Senha do Banco de Dados
DATABASE=           # Banco de Dados a ser utilizado
DATABASE_HOST=      # Esse é o nome do Host do Banco de Dados
DATABASE_PORT=      # Porta em que o Banco de Dados está exposto
SALT=               # Número de vezes que a senha será criptografada pelo bcrypt
SECRET=             # Senha usada para criptografar o jwt
```

6. Abra o terminal no diretório atual.

7. No terminal, digite:
```
docker compose up -d
```

8. Pronto! A API estará rodando.

## Observações
1. O Banco de Dados estará disponível em:
```
http://localhost:{DATABASE_PORT}
```
2. Se você preferir ter acesso ao gerenciador do Banco de Dados pela internet, acesse:
```
http://localhost:3080
``` 
    2.1. Entre com o usuário e senha
    ```
    DATABASE_USER=
    DATABASE_PASSWORD=
    ```
3. Para acessar as rotas da API, use a URL:
```
http://localhost:3000/api
```

## 📚 Rotas da API 

### 📌 Rotas de User
1. Criar usuário 
    - Método: `POST
    - Endpoint: `/users`
    - Body:
      ```
      {
        "name": "",
        "email": "",
        "password": ""
      }
      ```
    - Resposta (201 Created):
      ```
      {
        "auth": true,
        "user": {
            "id": ,
            "name": "",
            "email": "",
            "createdAt": "",
            "updatedAt": ""
        },
        "token": ""
      }
      ```
2. Login
    - Método: POST
    - Endpoint: /users/login
    - Body:
      ```
      {
        "email": "",
        "password": ""
      }
      ```  
    - Resposta (200 OK):
      ```
      {
        "auth": true,
        "user": {
            "id": ,
            "name": "",
            "email": "",
            "createdAt": "",
            "updatedAt": ""
        },
        "token": ""
      }
      ```
3. Buscar Usuário Autenticado 
    - Método: GET
    - Endpoint: /users/me
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Resposta (200 OK):
      ```
      {
        "id": ,
        "name": "",
        "email": "",
        "createdAt": "",
        "updatedAt": ""
      }
      ```
4. Atualizar Dados do Usuário
    - Método: PUT
    - Endpoint: /users/me
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Body (qualquer campo é opcional):
      ```
      {
        "name": "",
        "email": "",
        "password": ""
      }
      ```
    - Resposta (200 OK):
      ```
      {
        "message": "User updated successfully",
        "user": {
            "id": ,
            "name": "",
            "email": "",
            "createdAt": "",
            "updatedAt": ""
        }
     }
      ```

### 📌 Rotas de Category
1. Listar Categorias do Usuário
    - Método: GET
    - Endpoint: /categories
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Resposta (200 OK):
      ```
      [
        {
            "id": ,
            "name": "",
            "color": "",
            "userId": ,
            "createdAt": "",
            "updatedAt": ""
        },
        {
            "id": ,
            "name": "",
            "color": "",
            "userId": ,
            "createdAt": "",
            "updatedAt": ""
        }
      ]
      ```
2. Criar Categoria
    - Método: POST
    - Endpoint: /categories
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Body:
      ```
      {
        "name": "",
        "color": ""
      }
      ```
    - Resposta (201 Created):
      ```
      {
        "id": ,
        "name": "",
        "color": "",
        "userId": ,
        "createdAt": "",
        "updatedAt": ""
     }
      ```
3. Atualizar Categoria
    - Método: PUT
    - Endpoint: /categories/:id
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Parâmetro de rota:
      ```
      id: número inteiro (obrigatório)
      ```
    - Body (opcional):
      ```
      {
        "name": "Educação Atualizada",
        "color": "#2980B9"
      }
      ```
    - Resposta (200 OK):
      ```
      {
        "message": "Category updated successfully",
        "category": {
            "id": 3,
            "name": "Educação Atualizada",
            "color": "#2980B9",
            "userId": 1,
            "createdAt": "2025-07-06T18:30:00.000Z",
            "updatedAt": "2025-07-06T19:00:00.000Z"
        }
      }
      ```
4. Deletar Categoria
    - Método: DELETE
    - Endpoint: /categories/:id
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Parâmetro de rota:
      ```
      id: número inteiro (obrigatório)
      ```
    - Resposta (410 Gone):
      ```
      {
        "message": "Category deleted successfully"
      }
      ```
### 📌 Rotas de Transaction
1. Listar Todas as Transações do Usuário
    - Método: GET
    - Endpoint: /transactions
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Resposta (200 OK):
      ```
      {
        "transactions": [
            {
            "id": ,
            "title": "",
            "value": ,
            "type": "",
            "categoryId": ,
            "userId": ,
            "createdAt": "",
            "updatedAt": ""
            },
            ...
        ]
      }
      ```
2. Filtrar Transações por Tipo
    - Método: GET
    - Endpoint: /transactions/type/:type
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Parâmetro de rota:
      ```
      type: "income" | "expense"
      ```
    - Resposta (200 OK):
      ```
      {
        "transactions": [
            {
            "id": ,
            "title": "",
            "value": ,
            "type": "",
            "categoryId": ,
            "userId": ,
            "createdAt": "",
            "updatedAt": ""
            }
        ]
      }  
      ```
3. Filtrar Transações por Categoria
    - Método: GET
    - Endpoint: /transactions/category/:categoryId
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Parâmetro de rota:
      ```
      categoryId: número inteiro
      ```
    - Resposta (200 OK):
      ```
      {
        "transactions": [
            {
            "id": 3,
            "title": "Livro",
            "value": 50.00,
            "type": "expense",
            "categoryId": 3,
            "userId": 1,
            "createdAt": "2025-07-06T18:20:00.000Z",
            "updatedAt": "2025-07-06T18:20:00.000Z"
            }
        ]
      }
      ```
4. Criar Transação
    - Método: POST
    - Endpoint: /transactions
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Body:
      ```
      {
        "title": "Freelance",
        "value": 800.00,
        "type": "income",
        "categoryId": 1
      }
      ```
    - Resposta (201 Created):
      ```
      {
        "id": ,
        "title": "",
        "value": ,
        "type": "",
        "categoryId": ,
        "userId": ,
        "createdAt": "",
        "updatedAt": ""
      }
      ```
5. Atualizar Transação
    - Método: PUT
    - Endpoint: /transactions/:id
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Parâmetro de rota:
      ```
      id: número inteiro
      ```
    - Body (parcial):
      ```
      {
        "value": 850.00
      }
      ```
    - Resposta (200 OK):
      ```
      {
        "message": "Transaction updated successfully",
        "transaction": {
            "id": ,
            "title": "",
            "value": ,
            "type": "",
            "categoryId": ,
            "userId": ,
            "createdAt": "",
            "updatedAt": ""
        }
      }
      ```
6. Deletar Transação
    - Método: DELETE
    - Endpoint: /transactions/:id
    - Headers:
      ```
      Authorization: Bearer <token>
      ```
    - Parâmetro de rota:
      ```
      id: número inteiro
      ```
    - Resposta (410 Gone):
      ```
      {
        "message": "Transaction deleted successfully"
      }
      ```
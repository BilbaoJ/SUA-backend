# Node.js API with Express
This project is a backend API built wiNode.js an Express, designed to handle user authentication, CRUD operations for posts serving as a proxy for JSONPlaceholder.

## Folder structure
```
|-- src
|---- controllers
|---- routers
|---- services
|---- middlewares
|-- index.js
```
- controllers: Business logic for API endpoints.
- routers: Define API routes (posts, users, etc.).
- services: Utility functions or services (connection with db and JWT).
- middlewares: Customized middleware that processes requests and responses

## Installation
1. Clone this repository: 
```shell
git clone https://github.com/BilbaoJ/SUA-backend.git
```
2. Go to the project directory and install the dependencies:
```shell
cd SUA-backend
npm install
```
3. Set the environment variables in an .env file in the root of the project (PORT, URI_MONGODB, DB_MONGODB, PRIVATE_KEY, BASE_URL).
4. Start the server:
```shell
npm run dev
```
5. Access the API at: `http://localhost:PORT.`

## API Endpoints
### Authentication

| Method | Endpoint   | Description              | Body (Body)                     |
|--------|------------|--------------------------|------------------------------------|
| POST   | `/login`   | Authenticate a user       | `{ "email": "user@example.com", "password": "123456" }`|

### Posts
### Publicaciones (Posts)

| Method | Endpoint      | Description              | Body                      |
|--------|---------------|--------------------------|------------------------------------|
| GET    | `/posts`      | Get all posts | -                            |
| GET    | `/posts/:id`  | Get a post by ID | -                            |
| POST   | `/posts`      | Create a new post   | `{ "title": "New Post", "body": "body post", "userId": 1 }` |
| PUT    | `/posts/:id`  | Update an existing post    | `{ "id": 1, "title": "New title", "body": "New body", "userId": 1, }` |
| DELETE | `/posts/:id`  | Delete a post      | -                            |

## Return response estructure
```json
{
    "ok" : "Boolean",
    "message": "String",
    "info" : "Object"
}
```

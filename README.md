
# CRUD App

Creating a simple express application. This project show how to create, read, update and delete files from a database.


## Run Locally

Clone the project

```bash
  git clone https://github.com/lambeboluwatife/CRUD-App.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

  
## Demo

https://tranquil-mountain-20281.herokuapp.com/

  
## API Reference
#### Use Postman to test the endpoints

#### Landing Page

```http
  GET /
```

#### Get all datas

```http
  GET /datas
```

#### Get a data

```http
  GET /datas/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create new data

```http
  POST /datas
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.|
| `email`      | `string` | **Required**.|
| `country`      | `string` | **Required**.|

#### Edit data

```http
  PUT /datas/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.|
| `email`      | `string` | **Required**.|
| `country`      | `string` | **Required**.|

#### Delete data

```http
  DELETE /datas/${id}
```


  
## Appendix

Use Postman to test the endpoints

To create and edit in postman, navigate to body and select raw. Then enter the key value pair in the field provided.

To get a particular id, just send a get request to show all data and copy the id for the one you want and paste wherever you see {id} in the API reference above.


  
## Tech Stack

**Server:** Node, Express, MongoDB

  
## Authors

- [@lambeboluwatife](https://www.github.com/lambeboluwatife)

  
## Acknowledgements

 - [Deploying Node.js Apps On Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
 
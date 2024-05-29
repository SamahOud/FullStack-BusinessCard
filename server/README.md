# Getting Started with node server App

# Business Card App

## Installation

Enter the server folder

```bash
cd server
```

Install the node_modules

```bash
npm i
```

## Available Scripts

you can run:

### `npm start`

- It will run the app with node
- The page will not reload if you make edits.
- You must have a mongoDB Atlas Cluster

### `npm run dev`

- Runs the app with nodemon
- The page will reload if you make edits
- The print at the terminal will be purple with the message:

`Listening on: http://localhost:8181`

And if there are no login errors you should see the message painted in purple:

`connected to MongoDb Locally!`

## Available Routes

Here you can find API addresses that the server will respond to as well as what should be sent to them in the body of the HTTP request and what permissions are required to receive a response from a specific API

### Users API

#### Users end points

| no. | URL           | method  | Authorization                | action                   | notice       | returen        |
| --- | ------------- | ------- | ---------------------------- | ------------------------ | ------------ | -------------- |
| 01. | /users        | POST    | all                          | register user            | Unique email |                |
| 02. | /users/login  | POST    | all                          | login                    |              | Encrypt token  |
| 03. | /users        | GET     | admin                        | Get all users            |              | Array of users |
| 04. | /users/:id    | GET     | The registered user or admin | Get user                 |              | User           |
| 05. | /users/:id    | PUT     | The registered user          | Edit user                |              | User           |
| 06. | /users/:id    | PATCH   | The registered user          | Change isBusiness status |              | User           |
| 07. | /users/:id    | DELETE  | The registered user or admin | Delete user              |              | Deleted user   |

#### API for Register a new user

```http
  POST /api/users
```

#### Request

In the request body you will need to provide an object with the following keys and values

| index      | type    | index       | type   | min | max | remark   |
| ---------- | ------- | ----------- | ------ | --- | --- | -------- |
| name       | object  |             |        |     |     | required |
|            |         | first       | string | 2   | 256 | required |
|            |         | middle      | string | 2   | 256 |          |
|            |         | last        | string | 2   | 256 | required |
| phone      | string  |             |        | 9   | 11  | required |
| email      | string  |             |        | 5   |     | required |
| password   | string  |             |        | 7   | 20  | required |
| image      | object  |             |        |     |     |          |
|            |         | url         | string | 14  |     |          |
|            |         | alt         | string | 2   | 256 |          |
| address    | object  |             |        |     |     | required |
|            |         | state       | string | 2   | 256 |          |
|            |         | country     | string | 2   | 256 | required |
|            |         | city        | string | 2   | 256 | required |
|            |         | street      | string | 2   | 256 | required |
|            |         | houseNumber | number | 2   | 256 | required |
|            |         | zip         | number | 2   | 256 | required |
| isBusiness | boolean |             |        |     |     | required |

- "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&\*-
- "phone" must be a standard Israeli phone number
- "email" must be a standard email
- "image/url" must be a standard URL

#### API for Login a user

```http
  POST /api/users/login
```

### Request

In the request body you will need to provide an object with the following keys and values

| index    | type   | min | max | remark   |
| -------- | ------ | --- | --- | -------- |
| email    | string | 5   |     | required |
| password | string | 7   | 20  | required |

- "email" must be a standard email
- "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&\*-

### Response

If the user is in the database and the password sent is correct, a token will be returned and the following object can be extracted from it with the help of the jwt-decode library

| index      | type    |
| ---------- | ------- |
| \_id       | string  |
| isBusiness | boolean |
| isAdmin    | boolean |

#### API for Information about all the users

```http
  GET /api/users
```

### Request

- You will need to provide a token to get an answer from this api
- You will need to be Admin type user to get an answer from this api

#### API for Information about a user

```http
  GET /api/users/:id
```

### Request

- You will need to provide a token to get an answer from this api
- You will need to be the registered user or Admin type user to get an answer from this api

#### API for Updating User information

```http
  PUT /api/users/:id
```

### Request

In the request body you will need to provide an object with the following keys and values

| index      | type    | index       | type   | min | max | remark   |
| ---------- | ------- | ----------- | ------ | --- | --- | -------- |
| name       | object  |             |        |     |     | required |
|            |         | first       | string | 2   | 256 | required |
|            |         | middle      | string | 2   | 256 |          |
|            |         | last        | string | 2   | 256 | required |
| phone      | string  |             |        | 9   | 11  | required |
| email      | string  |             |        | 5   |     | required |
| password   | string  |             |        | 7   | 20  | required |
| image      | object  |             |        |     |     | required |
|            |         | url         | string | 14  |     | required |
|            |         | alt         | string | 2   | 256 | required |
| address    | object  |             |        |     |     | required |
|            |         | state       |        | 2   | 256 |          |
|            |         | country     |        | 2   | 256 | required |
|            |         | city        |        | 2   | 256 | required |
|            |         | street      |        | 2   | 256 | required |
|            |         | houseNumber |        | 2   | 256 | required |
|            |         | zip         |        | 2   | 256 | required |
| isBusiness | boolean |             |        |     |     | required |

- The user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&\*-
- "phone" must be a standard Israeli phone number
- "email" must be a standard email
- "image/url" must be a standard URL
- You will need to provide a token to get an answer from this api
- You need to be Admin to get an answer from this api

#### API for deleting a user

```http
  DELETE /api/users/:id
```

- You will need to provide a token to get an answer from this api
- You will need to be the registered user or Admin to get an answer from this api

#### API for changing user business status

```http
  PATCH /api/users/:id
```

- You will need to provide a token to get an answer from this api
- You will need to be the registered user or Admin to get an answer from this api

### Cards API

#### Cards end points

| no. | URL             | method  | Authorization                        | action          | returen        |
| --- | --------------- | ------- | ------------------------------------ | --------------- | -------------- |
| 01. | /cards          | GET     | all                                  | All cards       |                |
| 02. | /cards/my-cards | GET     | The registered user                  | Get user cards  | Array of cards |
| 03. | /cards/:id      | GET     | all                                  | Get card        | card           |
| 04. | /cards          | POST    | Business user                        | Create new card | card           |
| 05. | /cards/:id      | PUT     | The user who created the card        | Edit card       | card           |
| 06. | /cards/:id      | PATCH   | A registered user                    | Like card       | card           |
| 07. | /cards/:id      | DELETE  | A user who created the card or admin | Delete card     | Deleted card   |

#### API to get all business cards

```http
  GET /api/cards/
```

#### API for get a business card of a specific business

```http
  GET /api/cards/:id
```

#### API for receive all business cards of the registered user

```http
  GET /api/cards/my-cards
```

- You will need to provide a token to get an answer from this api

#### API for create a new business card

```http
  POST /api/cards/
```

### Request

In the request body you will need to provide an object with the following keys and values

| index       | type   | index       | type   | min | max  | remark   |
| ----------- | ------ | ----------- | ------ | --- | ---- | -------- |
| title       | string |             |        | 2   | 256  | required |
| subtitle    | string |             |        | 2   | 256  | required |
| description | string |             |        | 2   | 1024 | required |
| phone       | string |             |        | 9   | 11   | required |
| email       | string |             |        | 5   |      | required |
| web         | string |             |        | 14  |      |          |
| image       | object |             |        |     |      | required |
|             |        | url         | string | 14  |      |          |
|             |        | alt         | string | 2   | 256  |          |
| address     | object |             |        |     |      | required |
|             |        | state       | string |     |      |          |
|             |        | country     | string |     |      | required |
|             |        | city        | string |     |      | required |
|             |        | street      | string |     |      | required |
|             |        | houseNumber | number | 1   |      | required |
|             |        | zip         | number |     |      |          |

- "phone" must be a standard Israeli phone number
- "email" must be a standard email
- "web" must be a standard URL
- "image/url" must be a standard URL
- You will need to provide a token to get an answer from this api
- You will need to be a Business type user to get an answer from this api

#### API for updating business card information

```http
  PUT /api/cards/:id
```

### Request

In the request body you will need to provide an object with the following keys and values

| index       | type   | index       | type   | min | max  | remark   |
| ----------- | ------ | ----------- | ------ | --- | ---- | -------- |
| title       | string |             |        | 2   | 256  | required |
| subtitle    | string |             |        | 2   | 256  | required |
| description | string |             |        | 2   | 1024 | required |
| phone       | string |             |        | 9   | 11   | required |
| email       | string |             |        | 5   |      | required |
| web         | string |             |        | 14  |      |          |
| image       | object |             |        |     |      | required |
|             |        | url         | string | 14  |      |          |
|             |        | alt         | string | 2   | 256  |          |
| address     | object |             |        |     |      | required |
|             |        | state       | string |     |      |          |
|             |        | country     | string |     |      | required |
|             |        | city        | string |     |      | required |
|             |        | street      | string |     |      | required |
|             |        | houseNumber | number | 1   |      | required |
|             |        | zip         | number |     |      |          |

- "phone" must be a standard Israeli phone number
- "email" must be a standard email
- "web" must be a standard URL
- "image/url" must be a standard URL
- You will need to provide a token to get an answer from this api
- You will need to be a Business type user to get an answer from this api

#### API for liking a business card

```http
	PATCH /api/cards/:id
```

- You will need to provide a token to get an answer from this api

#### API for changing the business number

```http
	PATCH /api/cards/biz-number/:id
```

### Request

In the request body you will need to provide an object with the following keys and values

| index     | type   | min | max | remark   | from    | to      |
| --------- | ------ | --- | --- | -------- | ------- | ------- |
| bizNumber | number | 7   | 7   | required | 1000000 | 9999999 |

- You will need to provide a token to get an answer from this api
- You will need to be an admin type user to get an answer from this api

#### API for deleting a business card

```http
  DELETE /api/cards/:id
```

- You will need to provide a token to get an answer from this api
- You must be the user who created the card or an admin in order to delete the business card

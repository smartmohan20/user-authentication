# API Documentation

## User Signup `/user/signup`

### Register a new user account

Creates a new user account with the provided information.

- **Method:** `POST`
- **URL:** `/user/signup`

#### Request Parameters

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| name      | string | The name of the user   |
| email     | string | The email of the user  |
| password  | string | The password of the user|

#### Request Body (Example)

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Responses

- `201 Created` - User account successfully created.
  ```json
  {
    "message": "User account created successfully"
  }
  ```

- `400 Bad Request` - Invalid request parameters or missing fields.
  ```json
  {
    "error": "Invalid parameters"
  }
  ```

---

## User Login `/user/login`

### Authenticate a user

Authenticates a user based on provided email and password.

- **Method:** `POST`
- **URL:** `/user/login`

#### Request Parameters

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| email     | string | The email of the user  |
| password  | string | The password of the user|

#### Request Body (Example)

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Responses

- `200 OK` - User successfully authenticated. Returns a JWT token.
  ```json
  {
    "token": "<JWT_token>"
  }
  ```

- `401 Unauthorized` - Invalid email or password.
  ```json
  {
    "error": "Invalid email or password"
  }
  ```

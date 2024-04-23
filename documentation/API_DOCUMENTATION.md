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
      "statusCode": 201,
      "message": "Signup successful!",
      "data": {
          "id": 2,
          "name": "John Doe",
          "email": "john@email.com",
          "password": "password123",
          "updatedAt": "2024-04-23T13:11:11.053Z",
          "createdAt": "2024-04-23T13:11:11.053Z"
      },
      "errors": []
  }
  ```

- `400 Bad Request` - Invalid request parameters or missing fields.
  ```json
  {
    "errors": [
        {
            "type": "field",
            "msg": "Name is required",
            "path": "name",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Name cannot be empty",
            "path": "name",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Name must be a string",
            "path": "name",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Password is required",
            "path": "password",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Password cannot be empty",
            "path": "password",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Password must be a string",
            "path": "password",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Password must be at least 6 characters long",
            "path": "password",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Email is required",
            "path": "email",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Email cannot be empty",
            "path": "email",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Email must be a string",
            "path": "email",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Invalid email format",
            "path": "email",
            "location": "body"
        }
    ]
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
    "statusCode": 200,
    "message": "Login successful!",
    "data": "<JWT_token>",
    "errors": []
  }
  ```

- `401 Unauthorized` - Invalid email or password.
  ```json
  {
    "errors": [
        {
            "type": "field",
            "msg": "Email is required",
            "path": "email",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Email cannot be empty",
            "path": "email",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Email must be a string",
            "path": "email",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Password is required",
            "path": "password",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Password cannot be empty",
            "path": "password",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Password must be a string",
            "path": "password",
            "location": "body"
        },
        {
            "type": "field",
            "msg": "Password must be at least 6 characters long",
            "path": "password",
            "location": "body"
        }
    ]
  }
  ```

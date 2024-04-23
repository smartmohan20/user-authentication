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

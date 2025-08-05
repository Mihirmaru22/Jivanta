# Jivanta Backend

Jivanta Backend is the API server for the Jivanta platform, designed to bridge the healthcare gap in tier 3 cities and villages by enabling secure, direct access to affordable medicines. Built with Node.js, Express, and MongoDB, it manages authentication and user data for doctors and suppliers.

## Features

- User registration for doctors and suppliers
- Secure login with JWT authentication
- Protected API routes for authorized users
- MongoDB integration using Mongoose
- Password hashing with bcrypt

## Project Structure

```
.
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   ├── protectedRoutes.js
│   └── userRoutes.js
├── .env
├── LICENSE
├── package.json
├── README.md
└── server.js
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd jivanta-backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory:**
   ```
   PORT=6070
   MONGO_URI=you_mongo_db_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the server:**
   ```sh
   npm run dev
   ```
   The server will run on [http://localhost:6070](http://localhost:6070) by default.

## API Endpoints

### Auth Routes

- **POST `/api/auth/register`**  
  Register a new user (doctor or supplier).

- **POST `/api/auth/login`**  
  Login and receive a JWT token.

### Protected Routes

- **GET `/api/protected`**  
  Access a protected resource (requires JWT in the Authorization header).

## Environment Variables

- `PORT`: Server port (default: 6070)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
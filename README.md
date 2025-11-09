# Multi-Vendor Marketplace Management App

A full-stack web application for a multi-vendor marketplace with user authentication and product management.

## Features

- User Registration and Login
- JWT-based Authentication
- Dashboard for Vendors
- Add, View, and Manage Products
- Responsive UI with colorful background

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, bcryptjs, jsonwebtoken
- **Frontend**: React, Axios, React Router
- **Database**: MongoDB

## Project Structure

```
exp9/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddProduct.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   ├── ManageProducts.js
│   │   │   ├── Register.js
│   │   │   └── ViewProducts.js
│   │   ├── App.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB running locally (or update `.env` for cloud DB)
- Git

### Backend Setup
1. Navigate to `backend/` folder.
2. Run `npm install`.
3. Update `.env` with your MongoDB URI and JWT secret.
4. Run `npm start` or `node server.js`.

### Frontend Setup
1. Navigate to `frontend/` folder.
2. Run `npm install`.
3. Run `npm start`.

The app will run on:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Usage

1. Register a new account or login.
2. Access the dashboard after login.
3. Use the buttons to add, view, or manage products.

## API Endpoints

- POST `/api/auth/register` - Register user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get user info (protected)

## Contributing

Feel free to fork and contribute!

## License

MIT License

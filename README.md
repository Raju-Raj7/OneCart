# OneCart - E-commerce Platform

A modern full-stack e-commerce platform built with React, Node.js, and MongoDB, featuring separate customer and admin interfaces.

## 🚀 Live Demo

- **Customer App**: https://onecart-frontend-rle6.onrender.com/
- **Admin Panel**: https://onecart-admin-bn1w.onrender.com/

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Customer Features
- User registration and authentication
- Google OAuth integration
- Product browsing and search
- Shopping cart functionality
- Order management
- Newsletter subscription
- Responsive design

### Admin Features
- Admin authentication
- Product management (Add/Edit/Delete)
- Order management
- Dashboard analytics
- Inventory tracking

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Icons**: React Icons

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + bcrypt
- **Middleware**: CORS, Cookie Parser
- **Validation**: Validator.js

### Admin Panel
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **State Management**: Context API

## 📁 Project Structure

```
oneCart/
├── Frontend/              # Customer-facing React app
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # Context providers
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Images and static files
│   │   └── utils/         # Utility functions
│   ├── public/
│   └── package.json
├── Backend/               # API server
│   ├── controller/        # Route controllers
│   ├── model/            # Database models
│   ├── routes/           # API routes
│   ├── config/           # Configuration files
│   └── package.json
├── admin/                # Admin panel React app
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── assets/
│   └── package.json
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Firebase project

### 1. Clone the repository
```bash
git clone <repository-url>
cd oneCart
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
```

### 4. Admin Panel Setup
```bash
cd ../admin
npm install
```

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@onecart.com
ADMIN_PASSWORD=your_admin_password
```

### Frontend (.env)
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

## 🎯 Usage

### Development Mode

1. **Start Backend Server**
```bash
cd Backend
npm run dev
# Server runs on http://localhost:8000
```

2. **Start Frontend App**
```bash
cd Frontend
npm run dev
# App runs on http://localhost:5173
```

3. **Start Admin Panel**
```bash
cd admin
npm run dev
# Admin panel runs on http://localhost:5174
```

### Production Build

```bash
# Frontend
cd Frontend
npm run build

# Admin
cd admin
npm run build
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/registration` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/googlelogin` - Google OAuth login
- `POST /api/auth/adminlogin` - Admin login
- `GET /api/auth/logout` - User logout

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Products
- `GET /api/product` - Get all products
- `POST /api/product` - Add new product (Admin)
- `PUT /api/product/:id` - Update product (Admin)
- `DELETE /api/product/:id` - Delete product (Admin)

### Orders
- `POST /api/order` - Create new order
- `GET /api/order` - Get user orders
- `GET /api/order/admin` - Get all orders (Admin)

## 🌐 Deployment

The application is deployed on Render:

### Frontend Deployment
- Build command: `npm run build`
- Start command: `npm run preview`
- Static site deployment

### Backend Deployment
- Build command: `npm install`
- Start command: `npm start`
- Auto-deploy from GitHub

### Admin Panel Deployment
- Build command: `npm run build`
- Start command: `npm run preview`
- Static site deployment

## 🔐 Authentication Flow

1. **User Registration/Login**: Email/password or Google OAuth
2. **JWT Token**: Stored in HTTP-only cookies
3. **Session Management**: 7-day token expiration
4. **Admin Access**: Separate admin credentials

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

Created with ❤️ by **Raju Kumar**

## 📧 Contact

For any queries, please reach out to: rajukumar@example.com

## 🐛 Issues

If you encounter any issues, please create an issue on the GitHub repository.

---

**Happy Shopping with OneCart! 🛒**
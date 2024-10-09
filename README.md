# BookHaven

**BookHaven** is a full-stack bookstore application built using the MERN stack (MongoDB, Express.js, React, and Node.js). This application allows users to browse, search, and purchase books online with a secure authentication system, dynamic catalog, and comprehensive admin dashboard for managing books and orders.

## Features

- **User Authentication**: Secure login and registration using JWT-based authentication and bcrypt for password hashing.
- **Book Catalog**: A dynamic, searchable catalog allowing users to filter books by category, author, and price.
- **Shopping Cart**: Users can add books to their cart and proceed with secure checkout.
- **Admin Dashboard**: Admins can manage books, authors, categories, and handle order fulfillment.
- **Responsive Design**: The application is optimized for both desktop and mobile platforms.
- **Real-time Database**: MongoDB stores user data, book information, and order details, providing real-time updates and scalable performance.

## Tech Stack

### Frontend:
- **React**
- **Redux**
- **Vite** (bundler)
- **Tailwind CSS**
- **Axios** (for making HTTP requests)
- **HTML**
- **JavaScript**

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (Database)
- **JWT** (Authentication)
- **Bcrypt** (Password hashing)

### Deployment:
- **Frontend**: Deployed on [Netlify](https://www.netlify.com/)
- **Backend**: Deployed on [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/BookHaven.git
   ```

2. Navigate to the project directory:
   ```bash
   cd BookHaven
   ```

3. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

4. Install client dependencies:
   ```bash
   cd client
   npm install
   ```

### Running the Application

1. **MongoDB Setup**: Ensure MongoDB is running locally or configure a cloud-based MongoDB Atlas instance.

2. **Start the server**:
   ```bash
   cd server
   npm start
   ```

3. **Start the frontend**:
   ```bash
   cd client
   npm run dev
   ```

## License

This project is open-source under the [MIT License](LICENSE).

# MERN E-Commerce Application

## Project Overview
This project aims to build a full-stack e-commerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform will allow users to browse products, add them to their cart, make purchases, and manage orders.

## Key Features
- User Authentication
- Product Management
- Shopping Cart & Orders
- Admin Dashboard
- Responsive Design
- Secure Transactions

## Project Setup

### Folder Structure
- `backend/` → For server-side (Node.js, Express, MongoDB)
- `frontend/` → For client-side (React.js)

### Backend Setup
1. Initialized a Node.js project in the `backend` folder.
2. Installed required dependencies:
   - Core: `express`, `mongoose`, `dotenv`, `cors`, `jsonwebtoken`, `bcryptjs`
   - Development: `nodemon`, `morgan`
3. Created a `.gitignore` file to exclude `node_modules` and `.env`.
4. Created a `server.js` file to configure the Express server.

### Frontend Setup
1. Set up a Vite project in the `frontend` folder.
2. Installed necessary packages: `react`, `react-dom`, `vite`, `@vitejs/plugin-react`.
3. Updated the README file to reflect the new setup and instructions.

## Migration from Create React App to Vite

The frontend of this project has been migrated from Create React App (CRA) to Vite to improve development speed and performance. The following changes were made:

- Uninstalled `react-scripts` and installed Vite.
- Updated project structure to align with Vite's requirements.
- Configured Vite with the necessary plugins for React.

## Next Steps
- Continue developing the backend and frontend features as outlined in the project objectives.

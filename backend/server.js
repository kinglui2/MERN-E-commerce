import express, { json } from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth.route.js"

const app = express();
const PORT = process.env.PORT || 5000;
const api = "/api/v1"

// Middleware
app.use(cors());
app.use(json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the E-Commerce API');
});


app.use(`${api}/auth`, authRoutes)
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

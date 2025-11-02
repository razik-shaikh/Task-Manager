import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoute.js'
import connectDB from './config/db.js'
import dotenv from "dotenv"

dotenv.config();

// DB connect
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})

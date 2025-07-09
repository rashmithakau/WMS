import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/user.route.js';
import cors from "cors";


dotenv.config();

const app= express();

// Allow requests from frontend
app.use(cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true // if you are using cookies, authorization headers, etc.
  }));

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/user",userRoutes);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})
import express from 'express';
import userRouter from './routes/userRoutes.js';
import authRoute from './routes/userAuth.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/auth', authRoute);

app.use((err, req, res, next) => { // middleware for error handling
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode : statusCode
    });
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://127.0.0.1:${PORT}`);
    connectDB();
});
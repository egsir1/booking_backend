import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config"
import userRoutes from '../src/routes/users'
import authRoutes from '../src/routes/auth'
import mongoose from 'mongoose';
import cookieParser from "cookie-parser"

mongoose.connect(process.env.MONGODB_CONNECTION as string)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Connection error', err));
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin:  process.env.FRONTEND_URL
}));


app.use("/api/users", userRoutes)

app.use("/api/auth", authRoutes)

app.listen(7000, ()=> {
    console.log("Server is running on port 7000")
})
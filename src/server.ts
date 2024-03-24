import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config"

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION as string)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Connection error', err));
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: true
}));


app.get("/api/test", async (req: Request, res: Response)=> {
    res.json({message:"Bismillah"})
})

app.listen(7000, ()=> {
    console.log("Server is running on port 7000")
})
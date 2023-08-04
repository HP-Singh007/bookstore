import { config } from "dotenv";
import userRouter from "./routes/user.js";
import express from "express";

//dotenv configuration
config({
    path: "./data/config.env",
})

//express app
export const app = express();

//midllewares
app.use(express.json());

//routes
app.use("/api/v1/users",userRouter);

app.get('/',(req,res)=>{
    res.send("Working");
})

import { config } from "dotenv";
import userRouter from "./routes/user.js";
import vehicleRouter from "./routes/vehicle.js"
import express from "express";
import cookieParser from "cookie-parser";

//dotenv configuration
config({
    path: "./data/config.env",
})

//express app
export const app = express();

//midllewares
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/vehicles",vehicleRouter);

app.get('/',(req,res)=>{
    res.send("Working");
})

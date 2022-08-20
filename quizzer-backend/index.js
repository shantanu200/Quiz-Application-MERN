import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js";
import userRoutes from "./routes/auth.js";
import path from "path";
import {fileURLToPath} from "url";


dotenv.config();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/images",express.static(path.join(__dirname,"/images")));
app.use("/api/",userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
    connectDB();
    console.log(`Server is connected to PORT ${PORT}`);
})


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import fs from "fs";
import connectDB from "./db/connect.js";

// Defensive programming technique for checking if all required environment variables are defined
const requiredEnvVars = ["PORT", "MONGODB_URI", "CLIENT_URL"];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(
      `❌ ${envVar} is not defined. Please add it to your .env file.`
    );
    process.exit(1);
  }
}, console.log("✅ All required environment variables are defined."));

const PORT = process.env.PORT;
const routerFiles = fs.readdirSync("./routes");
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
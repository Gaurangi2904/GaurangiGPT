import "./dns-fix.js";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.js";

dotenv.config();
console.log(process.env.GEMINI_API_KEY);
const app = express();

app.use(cors());
app.use(express.json());

// Check if .env is loaded
console.log("MONGO_URL:");
console.log(process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);
  });

app.use("/api", chatRoutes);

app.get("/", (req, res) => {
  res.send("🚀 GaurangiGPT Backend Running");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
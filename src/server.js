import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/dbConnect.js"; 
import corsConnection from "./config/corsConnection.js";
import adminRoutes from "./routes/index.js"; // Import admin routes

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors(corsConnection()));

// Routes
app.use("/", adminRoutes);

// Database Connection & Server Start
const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed", error);
    process.exit(1);
  });

// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error); // Corrected variable name from 'err' to 'error'
  });

// Express
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next)=>{
  const statusCode =err.statusCode||500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success:false,
    message,
    statusCode,
  })

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

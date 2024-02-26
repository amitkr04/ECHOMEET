import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./Routes/authRoutes.js";

//configure env
dotenv.config();
//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes

app.use("/api/v1/auth/", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to video conferencing app</h1>");
});

//port
const PORT = process.env.PORT || 9000;

//run listien

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

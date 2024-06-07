import express from "express";
import taskrouter from "./routes/task.js";
import UserRouter from "./routes/user.js";
import env from "dotenv";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import { connectDb } from "./data/database.js";

connectDb();

env.config({
  path: ".env",
  });
  
  export const app = express();
// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: "*", 
  // You may want to specify a particular origin for security reasons
  credentials: true,
}));
app.use("/api/posts", UserRouter);
app.use("/api/tasks", taskrouter);

  
  // error middleware
  // app.use(ErrorMiddleware);
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT} on the ${process.env.NODE_ENV} mode `);
  });
  
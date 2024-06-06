import express from "express";
import taskrouter from "./routes/task.js";
import UserRouter from "./routes/user.js";
import env from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middlewares/error.js";
import cors from "cors";
env.config({
  path: "./data/.env",
});

export const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}
));
// make sure we use it before specifying Router
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/posts", UserRouter);
app.use("/tasks", taskrouter);
//  middleware
app.get("/", (req, res) => {
  res.send("Nice");
});

// error middleware
app.use(ErrorMiddleware);
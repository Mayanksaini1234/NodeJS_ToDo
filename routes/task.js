import express from "express";
import { delete_task, my_task, task, update_task } from "../controllers/task.js";
import { isauthenticated } from "../middlewares/auth.js";


const router = express.Router();
router.post("/new",isauthenticated, task)
router.get("/myTask",isauthenticated, my_task)
router.route("/:id")
.put(isauthenticated,update_task)
.delete(isauthenticated,delete_task)
export default router;
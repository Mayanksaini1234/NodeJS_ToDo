import express from "express";
import { delete_task, my_task, task, update_task } from "../controllers/task.js";
import { isauthenticated } from "../middlewares/auth.js";


const router = express.Router();
router.post("/todos",isauthenticated, task)
router.get("/todos",isauthenticated, my_task)
router.route("/todos/:id")
.put(isauthenticated,update_task)
.delete(isauthenticated,delete_task)
export default router;
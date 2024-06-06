import express from "express";
import { getAllData, getMyProfile,login, register,logout } from "../controllers/user.js";
import { isauthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.get("/all", getAllData); 
router.post("/register", register);
router.post("/login",login);
router.get("/logout", logout);
router.get("/me",isauthenticated,getMyProfile)
export default router;
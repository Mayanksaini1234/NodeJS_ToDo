
import { data } from "../models/user.js";
import jwt from "jsonwebtoken";
 export const isauthenticated = async (req,res,next)=>{
    const { token } = req.cookies;
  
    if (!token)
      return res.status(404).json({
        success: false,
        message: "Login First",
      });
  
    const decoded = jwt.verify(token, process.env.SECRET);
  
    req.user = await data.findById(decoded._id);
    next();
  };

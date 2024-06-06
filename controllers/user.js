import { data } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";


export const getAllData = async (req, res) => {
  let all_post = await data.find({});
  res.json(all_post);
};

export const getMyProfile =  (req, res) => {
  res
    .status(200)
    .json({
      success: true,
      user:req.user
    });
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await data.findOne({ email });
  
    if (user) {
      res.status(404).json({
        success: false,
        message: "user already exist",
      });
    }
    else {
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await data.create({
        name,
        email,
        password: hashedPassword
      });
      sendCookie(user, res, "Registered", 201);
    }
  
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await data.findOne({ email:email }).select("+password");
    if (!user) {
      res.status(404).json({
        success: false,
        message: "user not exist",
      });
  
    }
    else {
      const hashedPassword_decoded = await bcrypt.compare(password, user.password)
      if (hashedPassword_decoded) {
        sendCookie(user, res, `wELCOME BACK ${user.name}`, 200)
       
      }
      else {
        res.send("password incorrect")
      }
    }
  
  } catch (error) {
    next (error);
  }
};


export const logout = async (req, res) => {

  res.status(200).cookie("token","",{expires:new Date(Date.now()),
    sameSite: process.env.NODE_ENV==="development" ? "lax" :"none",
    secure: process.env.NODE_ENV==="development" ? false :true,

  }).json({
    success: true,
    message: "You are Logged Out",
  });


};

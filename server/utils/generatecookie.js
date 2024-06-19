import jwt from "jsonwebtoken"; 
import dotenv from 'dotenv'; dotenv.config(); 
const secret=process.env.SECRET_JWT; 

function generateTokenandSetcookie(userId,res){ 
  const token=jwt.sign({userId},secret,{expiresIn:"15d"}) 
  res.cookie("jwt",token,{ maxAge:15*24*60*60*1000, httpOnly:true, sameSite:"strict", secure:"development" }) 
} 

export default generateTokenandSetcookie

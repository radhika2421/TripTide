import express from "express";


const router=express.Router();

// index route
router.get("/",(req,res)=>{
    res.status(200).json({message:"Home Page"});
})

// signup
router.get("/signup",(req,res)=>{
    res.status(200).json({message:"User signup Page"});
})

// login
router.get("/login",(req,res)=>{
    res.status(200).json({message:"User login Page"});
})


export default router;
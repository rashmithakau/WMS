import mongoose from "mongoose";
import User from "../models/user.model.js";

export const createUser = async (req,res) => {
    const user = req.body;

    if(!user.userName || !user.password || !user.phoNumber){
        return res.status(400).json({message: "Please fill all the fields"});
    }

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json({success: true, message: "User created successfully", user: newUser});
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}
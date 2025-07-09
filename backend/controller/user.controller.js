import User from "../models/user.model.js";
import { userValidationSchema } from '../validation/userValidation.js';

export const createUser = async (req, res) => {
  const user = req.body;

  // Validate request body
  const { error } = userValidationSchema.validate(user,{ abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: error.details.map(err => err.message), // array of all error messages
    });
  }
  

  const newUser = new User(user);

  try {
    await newUser.save();
    res
      .status(201)
      .json({
        success: true,
        message: "User created successfully",
        user: newUser,
      });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


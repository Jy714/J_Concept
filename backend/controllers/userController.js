import Validator from "validator"
import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// create token
const createToken = (id) => { 
  return jwt.sign({ id }, process.env.JWT_SECRET);
}

// Route for user login
const loginUser = async (req,res) => { 
  try {
    const { email, password } = req.body;
  // checking user already exists or not
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.json({ success:false,message:"User not found"})
  }

  // Authenticate user password
  const isMatch = await bcrypt.compare(password,user.password)

  if (isMatch) {
    const token = createToken(user._id);
    res.json({ success: true, token, data:user.name});
  } else {
    res.json({success:false,message:"Invalid credentials"})
  }
  } catch (error) {
   console.error(error);
    res.json({success:false,message:error.message})
  }

}

// Route for edit user
const editUser = async (req, res) => { 
  try {
    const { name, email } = req.body;
    const exists = await userModel.findOne({ email });
    if (!exists) {
      return res.json({success:false,message:"User does not exists"})
    }

    if (exists.name === name) {
      return res.json({success:false,message:"Name cannot be same as previous"})
    }
    
    const response = await userModel.findByIdAndUpdate(exists._id, {name})
    if (response) {
      res.json({success:true,message:"User edited successfully"})
    } else {
      res.json({success:false,message:"User edited failed"})
    }
  } catch (error) {
    console.error(error);
    res.json({success:false,message:error.message})
  }
}

//Route for get user info
const getUserInfo = async (req,res) => { 
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    res.json({success:true,data:user.email})
  } catch (error) {
    console.error(error);
    res.json({success:false,message:error.message})    
  }
}

// Route for user register
const registerUser = async (req,res) => { 
  try {
    const { name, email, password } = req.body;

    // checking user already exists or not
    const exists = await userModel.findOne({email})
    if (exists) {
      return res.json({success:false,message:"User already exists"})
    }

    // validating email format & strong password
    if (!Validator.isEmail(email)) {
      return res.json({success:false,message:"Please enter a valid email"})
    }
    if (password.length < 8) {
      return res.json({success:false,message:"Please enter a strong password"})
    }

    // hash user password before create the account
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create account for user
    const newUser = new userModel({
      name,
      email,
      password:hashedPassword
    })
    const user = await newUser.save();
    // create token for user
    const token = createToken(user._id);
    res.json({success:true,token,data:user.name})

  } catch (error) {
    console.error(error);
    res.json({success:false,message:error.message})
  }
}

// Route for admin login
const adminLogin = async (req, res) => { 
  try {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({success:false,message:"Invalid credentials"})
    }
  } catch (error) {
    console.error(error);
    res.json({success:false,message:error.message})    
  }
}

export {loginUser, registerUser,adminLogin,editUser,getUserInfo}
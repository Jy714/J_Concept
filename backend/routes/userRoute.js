import express from "express";
import { loginUser, registerUser, adminLogin, editUser, getUserInfo } from "../controllers/userController.js";
import auth from "../middleware/auth.js"

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post("/edit", editUser);
userRouter.post("/info",auth,getUserInfo)

export default userRouter;
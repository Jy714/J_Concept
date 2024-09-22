import express from "express";
import { placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus, verifyStripe } from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import auth from "../middleware/auth.js"
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment Features
orderRouter.post("/place",auth,placeOrder);
orderRouter.post("/stripe",auth, placeOrderStripe);

// User Feature
orderRouter.post("/userorders", auth, userOrders);

// Verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
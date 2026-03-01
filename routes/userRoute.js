import express from 'express';
import { loginUser, registerUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment, paymentRazorpay, verifyRazorpay, paymentStripe, verifyStripe, payAppointmentWallet, sendUserOTP, resetUserPassword, rechargeWalletRazorpay, verifyWalletRecharge } from '../controllers/userController.js';
import upload from '../middleware/multer.js';
import authUser from '../middleware/authUser.js';
const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

userRouter.get("/get-profile", authUser, getProfile)
userRouter.post("/update-profile", upload.single('image'), authUser, updateProfile)
userRouter.post("/book-appointment", authUser, bookAppointment)
userRouter.get("/appointments", authUser, listAppointment)
userRouter.post("/cancel-appointment", authUser, cancelAppointment)
userRouter.post("/payment-razorpay", authUser, paymentRazorpay)
userRouter.post("/verifyRazorpay", authUser, verifyRazorpay)
userRouter.post("/payment-stripe", authUser, paymentStripe)
userRouter.post("/verifyStripe", authUser, verifyStripe)

// Wallet Endpoints
userRouter.post("/payment-wallet", authUser, payAppointmentWallet)
userRouter.post("/recharge-wallet-razorpay", authUser, rechargeWalletRazorpay)
userRouter.post("/verify-wallet-recharge", authUser, verifyWalletRecharge)

// Forgot Password API
userRouter.post("/send-otp", sendUserOTP)
userRouter.post("/reset-password", resetUserPassword)

export default userRouter;
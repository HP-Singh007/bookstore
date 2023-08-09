import express from "express"
import { login, register, logout, getMyProfile } from "../controllers/user.js";

//router
const router=express.Router();


router.post('/login',login);
router.post('/register',register);
router.get('/logout',logout);
router.get('/me',getMyProfile);
export default router;
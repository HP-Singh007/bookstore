import { User } from "../models/user.js";
import { sendCookie } from "../utils/features.js";
import bcrypt from "bcrypt"

//login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "No User Found"
            })
        }
        //user found now checking password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            sendCookie(user, res, "Login Successful", 200);
        }
        else {
            res.status(400).json({
                success: false,
                message: "Incorrect Password"
            })
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "error"
        })
    }
}

//Register
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({ name, email, password: hashedPassword });
        sendCookie(user, res, "User Registered Successfully", 200);
    }
    catch (error) {
        console.log(error);
    }
}

//Get Details
export const getMyProfile = (req, res) => {
    res.status(200).json({
        success: true,
        message: "User Details",
        user: req.user
    })
}

//Logout
export const logout = (req, res) => {
    try {
        res.status(200).cookie("token", "", {
            maxAge: 0
        }).json({
            success: true,
            message: "Logout"
        })
    } catch (error) {
        res.json({
            success: false,
            error: "Some error occured"
        })
    }
}
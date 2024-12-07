import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { User } from "../models/user.model.js";

const login = async (req, res) => {
    // logic goes here
};

const logout = async (req, res) => {
    // logic goes here
};

export const signup = async (req, res) => {
    try {
        const { email, password, name } = req.body;
		
        if (!email || !password || !name) {
			throw new Error("All fields are required");
		}

		const userAlreadyExists = await User.findOne({ email });
		console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcryptjs.hash(password, 10);
		const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

		const user = new User({
			email,
			password: hashedPassword,
			name,
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
		});

		await user.save();

		// jwt
		generateTokenAndSetCookie(res, user._id);

		await sendVerificationEmail(user.email, verificationToken);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error?.message });
	}
};

const verifyEmail = async (req, res) => {
    // logic goes here
};

const forgotPassword = async (req, res) => {
    // logic goes here
};
const resetPassword = async (req, res) => {
    // logic goes here
};

const checkAuth = async (req, res) => {
    // logic goes here
};

export {
    login,
    logout,
    signup,
    verifyEmail,
    forgotPassword,
    resetPassword,
    checkAuth
};
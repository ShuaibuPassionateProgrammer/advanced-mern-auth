import bcryptjs from "bcryptjs";
import crypto from "crypto";

const login = async (req, res) => {
    // logic goes here
};
const logout = async (req, res) => {
    // logic goes here
};
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            throw new Error("All fields are required");
        }
    }
    catch (error) {
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
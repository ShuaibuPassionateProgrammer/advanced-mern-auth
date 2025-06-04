import mongoose from "mongoose";

export const connectDB = async () => {
    try {}
    catch (error) {
        console.error("Error in database connection: " + error.message);
        process.exit(1);
    }
};
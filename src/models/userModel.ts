import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a Name"]
    },
    year: {
        type: String,
        required: [true, "Please provide a year"],
        // enum: [1, 2]
    },
    dept: {
        type: String,
        required: [true, "Please provide a Department"],
        enum: ["CSE", "IT", "ECE", "EE", "ME", "CE"]
    },
    roll: {
        type: String,
        required: [true, "Please provide a Roll No"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Please provide a Mobile No"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    payReceipt: {
        type: String,
        unique: true
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
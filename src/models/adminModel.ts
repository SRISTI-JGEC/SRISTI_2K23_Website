import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a Name"]
    },
    designation: {
        type: String,
        required: [true, "Please provide a Designation"]
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
    }
})

const Admin = mongoose.models.admins || mongoose.model("users", adminSchema);

export default Admin;
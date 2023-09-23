import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    eventName: {
        type: String,
        required: [true, "Please provide an Event Name"]
    },
    leadUsername: {
        type: String,
        required: [true, "Please provide a Leader username"]
    },
    members : [{
        username : String,
        isVerified : Boolean
    }],
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

const Team = mongoose.models.teams || mongoose.model("teams", teamSchema);

export default Team;
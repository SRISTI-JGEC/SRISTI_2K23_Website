import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: [true, "Please provide a username"]
    },
    eventName: {
        type: String,
        required: [true, "Please provide an Event Name"]
    },
    leadEmail: {
        type: String,
        required: [true, "Please provide Leader's email"]
    },
    members : [
        {
            email : String,
            isVerified : {
                type: Boolean,
                default: false
            },
            verifyToken: String,
            verifyTokenExpiry: Date

        }
    ]
})

const Team = mongoose.models.teams || mongoose.model("teams", teamSchema);

export default Team;
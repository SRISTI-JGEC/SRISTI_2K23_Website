import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    teamName: String,
    eventName: {
        type: String,
        required: [true, "Please provide an Event Name"]
    },
    leadId: {
        type: String,
        required: [true, "Please provide Leader's userId"]
    },
    members : [
        {
            email : String,
            userId : String || null,
            verifyToken: String || null,
            verifyTokenExpiry: Date || null

        }
    ]
})

const Team = mongoose.models.teams || mongoose.model("teams", teamSchema);

export default Team;
import connect from "@/dbConfig/dbConfig";
import Team from "@/models/teamModel";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
    try {

        let teams = await Team.find({});
        console.log(teams);

        teams = teams.map(async (team: any): Promise<any | undefined> => {
            if (team.leadId) {
                const user = await User.findById(team.leadId);
                team.lead = user;
                return team;
            }
            return undefined;
        });

        return NextResponse.json({ teams }, { status: 200 });

    } catch (error: any) {

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
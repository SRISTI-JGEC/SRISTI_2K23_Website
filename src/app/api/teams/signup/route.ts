import connect from "@/dbConfig/dbConfig";
import Team from "@/models/teamModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest){
    try {

        const reqBody = await request.json();
        const {teamName, eventName, leadEmail, members} = reqBody;

        const team = await Team.findOne({eventName});
        const team1 = await Team.findOne({leadEmail});
        const team2 = await Team.findOne({eventName, "members.email" : leadEmail});

        if(team || team1 || team2){
            return NextResponse.json({error: "Team already exists or Lead is already been registered in an other teeam"}, {status: 400});
        }

        for(let i = 0; i < members.length; i++){
            let find = await Team.findOne({eventName, "members.email" : members[i].email});
            let find2 = await Team.findOne({eventName, leadEmail : members[i].email});
            if(find || find2)
                return NextResponse.json({error: `${members[i].email} is already registered`}, {status: 400});
        };


        const newTeam = new Team({
            teamName,
            eventName,
            leadEmail,
            members
        });

        const savedTeam = await newTeam.save();

        //send verification email
        for(let i = 0; i < members.length; i++)
            await sendEmail({email : members[i].email, emailType: "INVITATION", teamId: savedTeam._id, userId : savedTeam.members[i]._id});

        return NextResponse.json({
            message: "Team created successfully",
            success: true,
            savedTeam
        })
        
        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}
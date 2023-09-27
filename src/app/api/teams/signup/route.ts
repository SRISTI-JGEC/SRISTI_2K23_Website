import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Team from "@/models/teamModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest){
    try {

        const reqBody = await request.json();
        const {teamName, eventName, leadId, members} = reqBody;

        const user = await User.findOne({_id : leadId, participation : {$exists: true, $ne: []}, "participation.eventName" : eventName});
        console.log(user);
        
        if(user){
            return NextResponse.json({error: "User already registered for this event"}, {status: 400});
        }

        if(members) {
            for(let i = 0; i < members.length; i++){
                const user2 = await User.findOne({email : members[i].email, participation : {$exists: true, $ne: []}, "participation.eventName" : eventName});
                if(user2)
                    return NextResponse.json({error: `${members[i].email} already registered for this event`}, {status: 400});
            }
        }



        const newTeam = new Team({
            teamName,
            eventName,
            leadId,
            members
        });

        const savedTeam = await newTeam.save();

        await User.findByIdAndUpdate(leadId, {
            $push : {
              participation : {
                eventName,
                teamId : newTeam._id
              }
            }
          })
        
        const user3 = await User.findById(leadId);
        console.log(user3);

        //send verification email
        if(members) {
            for(let i = 0; i < members.length; i++){
                await sendEmail({email : members[i].email, emailType: "INVITATION", teamId : savedTeam._id, teamName, eventName, userId : savedTeam.members[i]._id});
            }
        }
        
        return NextResponse.json({
            message: "Team created successfully",
            success: true,
            savedTeam
        })
        
        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}
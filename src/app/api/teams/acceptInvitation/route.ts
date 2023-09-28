import connect from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import Team from "@/models/teamModel";
import jwt from "jsonwebtoken"

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const userToken = request.cookies.get("token")?.value || "";
    const userId = jwt.verify(userToken, process.env.TOKEN_SECRET!)?.id || "";
    console.log(userId);
    const { token } = reqBody;
    console.log(token);

    const team = await Team.findOne({
      "members.verifyToken": token,
      "members.verifyTokenExpiry": { $gt: Date.now() },
    });

    console.log(team);
    if (!team) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }
    await Team.findOneAndUpdate(
      { _id: team._id, "members.verifyToken": token },
      {
        "members.$.userId": userId,
        "members.$.verifyToken": null,
        "members.$.verifyTokenExpiry": null,
      }
    );

    await User.findByIdAndUpdate(userId, {
      $push : {
        participation : {
          eventName : team.eventName,
          teamId : team._id
        }
      }
    })

    return NextResponse.json({
      message: "Invitation Accepted successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

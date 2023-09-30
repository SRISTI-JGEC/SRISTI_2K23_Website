import connect from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import Team from "@/models/teamModel";
import jwt from "jsonwebtoken";
import { unescape } from "querystring";
interface JwtPayload {
  id: string;
}

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const userToken = request.cookies.get("token")?.value || "";
    const { id } = jwt.verify(
      userToken,
      process.env.TOKEN_SECRET!
    ) as JwtPayload;
    console.log(id);
    const { token } = reqBody;
    console.log(token);
    const newToken = unescape(token);
    const team = await Team.findOne({
      "members.verifyToken": newToken,
      "members.verifyTokenExpiry": { $gt: Date.now() },
    });
    console.log(team);
    if (!team) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }
    await Team.findOneAndUpdate(
      { _id: team._id, "members.verifyToken": newToken },
      {
        "members.$.userId": id,
        "members.$.verifyToken": null,
        "members.$.verifyTokenExpiry": null,
      }
    );

    await User.findByIdAndUpdate(id, {
      $push: {
        participation: {
          eventName: team.eventName,
          teamId: team._id,
        },
      },
    });

    return NextResponse.json({
      message: "Invitation Accepted successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

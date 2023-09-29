import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Team from "@/models/teamModel";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
interface JwtPayload {
  _id: string;
}
connect();

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const { _id } = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;

    if (!_id) NextResponse.json({ error: "No valid Token" }, { status: 400 });

    //get all data of user
    const user = await User.findById(_id);

    let teams = [];
    if (user.participation) {
      for (let i = 0; i < user.participation.length; i++) {
        const team = await Team.findById(user.participation[i].teamId);
        teams.push(team);
      }
    }

    return NextResponse.json({ user, teams }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer"; 

connect();

export async function POST(request: NextRequest){
    try {

        const reqBody = await request.json(); 
       
        const {name, year, dept, roll, phone, email, password, payReceipt} = reqBody;
       console.log(name, year, dept, roll, phone, email, password, payReceipt);
        const user = await User.findOne({payReceipt, isVerified : true});
       console.log(user)
        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            name,
            year, 
            dept, 
            roll, 
            phone, 
            email, 
            password: hashedPassword, 
            payReceipt
        });
        console.log(newUser);
        const savedUser = await newUser.save();
        console.log(savedUser);
        //send verification email

        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id});

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
    } catch (error: any) {
        console.log("error page")
        return NextResponse.json({error: error.message}, {status: 500})

    }
}
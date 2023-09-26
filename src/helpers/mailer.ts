import nodemailer from "nodemailer";
import User from "@/models/userModel";
import Team from "@/models/teamModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId, teamId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    let event, teamName;
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "INVITATION") {
      const team = await Team.findOneAndUpdate(
        { _id: teamId, "members._id": userId },
        {
          "members.$.verifyToken": hashedToken,
          "members.$.verifyTokenExpiry": Date.now() + 86400000,
        }
      );
      event = team.eventName;
      teamName = team.teamName;
    }

    const link = `${process.env.DOMAIN}/verifyEmail?token=${hashedToken}`;

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 587,
      service: "gmail",
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject:
        emailType === "VERIFY"
          ? "Verify your email"
          : emailType === "RESET"
          ? "Reset your password"
          : `Invitation from Sristi for ${event}`,
      html: `<p>Click <a href=${link}>here</a> 
            to ${
              emailType === "VERIFY"
                ? "verify your email"
                : emailType === "RESET"
                ? "reset your password"
                : `to join the team ${teamName} for the event ${event}`
            }
            <br>
            or copy and paste the link below in your browser. 
            <br> ${link}
            </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

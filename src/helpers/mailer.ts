import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    console.log("nodemailer enter");
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

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
    }

    var transport = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 2525,
      // host:"gmail",
      auth: {
        user: "api",
        pass: "3454c20ea31e45fd2097656239da3714",
      },
    });

    console.log(transport);
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyEmail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
            or copy and paste the link below in your browser. <br> ${
              process.env.DOMAIN
            }/verifyEmail?token=${hashedToken}
            </p>`,
    };
    console.log(mailOptions);
    const mailresponse = await transport.sendMail(mailOptions);
    console.log(mailresponse);
    return mailresponse;
  } catch (error: any) {
    console.log("nodemailer error page");
    throw new Error(error.message);
  }
};

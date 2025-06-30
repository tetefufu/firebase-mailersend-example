import "dotenv/config";
import * as nodemailer from "nodemailer";
import {defineSecret} from "firebase-functions/params";

export const gmailUser = defineSecret("GMAIL_USER");
export const gmailPass = defineSecret("GMAIL_PASS");

export async function sendMonthlyEmails() {
  const user = process.env.GMAIL_USER || gmailUser.value();
  const pass = process.env.GMAIL_PASS || gmailPass.value();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {user, pass},
  });

  const emailPromises = [];
  for (const email of ["joelbellot@hotmail.com", "saks46@hotmail.com"]) {
    console.log(`Processing user: ${email}`);
    emailPromises.push(
      transporter.sendMail({
        from: user,
        to: email,
        subject: "Your Monthly Report",
        text: "Hi there,\nThis is your monthly update!",
        html: "<p>This is your monthly update!</p>",
      })
    );
  }
  await Promise.all(emailPromises);
}

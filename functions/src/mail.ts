import 'dotenv/config';
import { Recipient, MailerSend, EmailParams, Sender } from 'mailersend';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY!,
});

export async function sendMonthlyEmails() {
  const emailPromises = [];

  for (const email of ['joelbellot@hotmail.com', 'saks46@hotmail.com']) { 
    console.log(`Processing user: ${email}`);

    const sentFrom = new Sender('you@yourdomain.com', 'Your App');
    const recipients = [new Recipient(email, 'User')];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('Your Monthly Report')
      .setHtml(`<p>This is your monthly update!</p>`)
      .setText(`Hi there,\nThis is your monthly update!`);

    emailPromises.push(mailerSend.email.send(emailParams));
  }

  await Promise.all(emailPromises);
}
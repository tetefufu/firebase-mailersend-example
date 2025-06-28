import 'dotenv/config';
import { Recipient, MailerSend, EmailParams, Sender } from 'mailersend';
import * as admin from 'firebase-admin';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY!,
});

export async function sendMonthlyEmails() {
  const db = admin.firestore();
  const usersSnap = await db.collection('users').get();

  const emailPromises = [];

  for (const doc of usersSnap.docs) {
    console.log(`Processing user: ${doc.id}`);
    const user = doc.data();
    if (!user.email) continue;

    const sentFrom = new Sender('you@yourdomain.com', 'Your App');
    const recipients = [new Recipient(user.email, user.name || 'User')];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('Your Monthly Report')
      .setHtml(`<p>Hi ${user.name || 'there'},</p><p>This is your monthly update!</p>`)
      .setText(`Hi ${user.name || 'there'},\nThis is your monthly update!`);

    emailPromises.push(mailerSend.email.send(emailParams));
  }

  await Promise.all(emailPromises);
}

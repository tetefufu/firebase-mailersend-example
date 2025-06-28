import { Recipient, MailerSend, EmailParams } from '@mailersend/sdk';
import { getFirestore } from 'firebase-admin/firestore';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY!,
});

export async function sendMonthlyEmails() {
  const db = getFirestore();
  const usersSnap = await db.collection('users').get();

  const emailPromises = [];

  for (const doc of usersSnap.docs) {
    const user = doc.data();
    if (!user.email) continue;

    const recipients = [new Recipient(user.email, user.name || 'User')];

    const emailParams = new EmailParams()
      .setFrom('you@yourdomain.com') // your verified MailerSend sender
      .setFromName('Your App')
      .setRecipients(recipients)
      .setSubject('Your Monthly Report')
      .setHtml(`<p>Hi ${user.name || 'there'},</p><p>This is your monthly update!</p>`);

    emailPromises.push(mailerSend.email.send(emailParams));
  }

  await Promise.all(emailPromises);
}

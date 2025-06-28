import { onSchedule } from 'firebase-functions/v2/scheduler';
import * as admin from 'firebase-admin';
import { sendMonthlyEmails } from './mail';

admin.initializeApp();

export const monthlyEmail = onSchedule(
  {
    schedule: '0 9 1 * *', // Run at 9am UTC on 1st of each month
    timeZone: 'UTC',
  },
  async () => {
    await sendMonthlyEmails();
  }
);

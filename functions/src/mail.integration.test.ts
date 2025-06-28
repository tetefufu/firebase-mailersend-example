import { sendMonthlyEmails } from './mail';
import * as admin from 'firebase-admin';

describe('sendMonthlyEmails (integration)', () => {
  beforeAll(() => {
    if (!admin.apps.length) {
      admin.initializeApp();
    }
  });

  it('should send emails to all users in Firestore', async () => {
    await expect(sendMonthlyEmails()).resolves.not.toThrow();
  });
});

import { sendMonthlyEmails } from "../src/mail";

describe("sendMonthlyEmails integration", () => {
  it("should send emails to all users in the list without throwing", async () => {
    await expect(sendMonthlyEmails()).resolves.not.toThrow();
  });
});

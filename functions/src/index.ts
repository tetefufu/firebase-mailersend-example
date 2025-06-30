import {setGlobalOptions} from "firebase-functions";
import {onSchedule} from "firebase-functions/v2/scheduler";
import * as logger from "firebase-functions/logger";
import {sendMonthlyEmails} from "./mail";


setGlobalOptions({maxInstances: 10});

export const logEveryMonth = onSchedule({
  schedule: "0 0 1 * *", // At 00:00 on day-of-month 1
  timeZone: "UTC",
}, async () => {
  logger.info("Scheduled function running...", {structuredData: true});
  logger.info("sendMonthlyEmails completed successfully", {structuredData: true});
});

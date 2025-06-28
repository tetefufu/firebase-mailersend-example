import {setGlobalOptions} from "firebase-functions";
import {onSchedule} from "firebase-functions/v2/scheduler";
import * as logger from "firebase-functions/logger";


setGlobalOptions({maxInstances: 10});

export const logEveryFiveMinutes = onSchedule({
  schedule: "every 5 minutes",
  timeZone: "UTC",
}, async () => {
  logger.info("Scheduled function ran: logging every 5 minutes", {structuredData: true});
});

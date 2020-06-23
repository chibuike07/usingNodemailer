const nodeMailer = require("nodemailer");
const cronjob = require("node-cron");

nodeMailer.createTestAccount((err, account) => {
  if (err) {
    console.error("Failed to create a testing account. " + err.message);
    return process.exit(1);
  } else {
    console.log("Credentials obtained, sending message...");
    console.log(account);
  }
});

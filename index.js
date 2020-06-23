const nodeMailer = require("nodemailer");
const cronjob = require("node-cron");

nodeMailer.createTestAccount((err, account) => {
  if (err) {
    console.error("Failed to create a testing account. " + err.message);
    return process.exit(1);
  } else {
    console.log("Credentials obtained, sending message...");
    createTransporter(account);
  }
});

const createTransporter = userEtherealData => {
  //creating smtp object
  let transporter = nodeMailer.createTransport({
    host: userEtherealData.smtp.host,
    port: userEtherealData.smtp.port,
    secure: userEtherealData.smtp.secure,
    auth: {
      user: userEtherealData.user,
      pass: userEtherealData.pass
    }
  });
  console.log("userEtherealData", userEtherealData);
};

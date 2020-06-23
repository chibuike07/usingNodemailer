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
  structureMailOption(transporter);
  //   console.log("userEtherealData", userEtherealData);
};

const structureMailOption = transporter => {
  let mailOption = {
    from: "Sender Name <sender@example.com>",
    to: "Recipient <recipient@example.com>",
    subject: "the wow of nodemailer",
    text: "sending hello world to my user",
    html: `<h2> some html elements</h2>`
  };
  transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(info.massageId);
      console.log(nodeMailer.getTestMessageUrl(info));
    }
  });
};

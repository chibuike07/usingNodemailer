const nodeMailer = require("nodemailer");
const cronjob = require("node-cron");

const structureMailOption = transporter => {
  let mailOption = {
    from: "chibuikeprincewill42@gmail.com",
    to: "princewillchime43@gmail.com, another user account",
    subject: "the wow of nodemailer",
    text: "sending hello world to my user",
    html: `<h2> adding html files </h2>`
  };

  transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(info.messageId);
      console.log(nodeMailer.getTestMessageUrl(info));
    }
  });
};

const createTransporter = () => {
  //creating smtp object
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "chibuikeprincewill42@gmail.com",
      pass: "your pass password"
    }
  });
  structureMailOption(transporter);
};

cronjob.schedule("* * * * *", () => {
  createTransporter();
  console.log("message send every minute");
});

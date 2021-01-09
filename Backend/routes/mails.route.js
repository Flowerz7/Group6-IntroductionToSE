const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

function sendMailto(mailAddress, content) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "edu.project.tods@gmail.com",
      pass: "matkhaukhongbaomat",
    },
  });

  const mailOption = {
    from: "edu.project.tods@gmail.com",
    to: mailAddress,
    subject: "GAP | Information exchange mail",
    text: content,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log("Error occurs when send mail!");
    } else {
      console.log("Mail sent");
    }
  });
}

router.route("/send").post((req, res) => {
  const { content, mailAddress } = req.body;

  sendMailto(mailAddress, content);

  res.end();
});

module.exports = router;

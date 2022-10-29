const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "tneshcheret@gmail.com",
    pass: META_PASSWORD
  }
};
const transporter = nodemailer.createTransport(nodemailerConfig);

const sendMail = async (data) => {
  const email = { ...data, from: "tneshcheret@gmail.com" };
  await transporter.sendMail(email);
  console.log(email);
  return true;
};

module.exports = sendMail;

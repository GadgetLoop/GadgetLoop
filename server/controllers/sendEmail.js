const nodemailer = require("nodemailer");
require('dotenv').config();

const express = require("express");
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohammedhassouna000@gmail.com',
        pass: 'iyfyzqcsphpdwgvz'
    }
});

var mailOptions = {
    from: 'mohammedhassouna000@gmail.com',
    to: 'mohammedhassouna000@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions);


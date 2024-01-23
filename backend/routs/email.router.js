const express = require("express");
const emailRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const emailServices = require("../services/email.services");
const e = require("express");

// all inbox emails
// emailRouter.get("/inbox/", async function(req,res){
//     const email = "shlomi945679@gmail.com"
//     let data= await emailServices.getAllEmails({destination: email})
//     res.send(data)

// })
emailRouter.use(authentication);

function authentication(req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send();
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).send();
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decoded);
    req.email = decoded.email;
    next();
  } catch (error) {
    console.log(error);
    res.status(403).send();
  }
}

emailRouter.get("/inbox/", async function (req, res) {
  let data = await emailServices.getAllEmails({ "destinations.email": req.email });
  res.send(data);
});

emailRouter.get("/allEmails/", async function (req, res) {
  let data = await emailServices.getEmail({ _id: req._id });
  console.log(data);
  res.send(data);
});

emailRouter.get("/outbox/", async function (req, res) {
  let data = await emailServices.getAllEmails({ "sender.email": req.email });
  res.send(data);
});

emailRouter.put("/garbage/:emailId", async function (req, res) {
  const email = req.params.emailId
  const status = req.params.destinations.status
  console.log(email);
  let data = await emailServices.updateEmail(email ,status)
  res.send(data)
});

emailRouter.post("/", async function (req, res) {
  console.log(req.email);
  try {
    const data = await emailServices.sendEmail(req.body, req.email);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

module.exports = emailRouter;

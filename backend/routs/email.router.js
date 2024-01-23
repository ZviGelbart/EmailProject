const express = require("express");
const emailRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const emailServices = require("../services/email.services");

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

emailRouter.get("/outbox/:email", async function (req, res) {
  const email = req.params.email;
  // const sender = req.sender
  let data = await emailServices.getAllEmails({ "sender.email": email });
  res.send(data);
});

emailRouter.put("/outbox/:email", async function (req, res) {});

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

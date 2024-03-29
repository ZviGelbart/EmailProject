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
  let data = await emailServices.getAllEmails({
    "destinations.email": req.email
  }, "inbox");
  res.send(data);
});

// emailRouter.get("/allEmails/", async function (req, res) {
//   let data = await emailServices.getEmail({ _id: req._id });
//   console.log(data);
//   res.send(data);
// });

emailRouter.get("/outbox/", async function (req, res) {
  let data = await emailServices.getAllEmails({ "sender.email": req.email }, "outbox");
  res.send(data);
});

// emailRouter.put("/garbage/:emailId", async function (req, res) {
//   const emailId = req.params.emailId
//   const status = req.body
//   let data = await emailServices.updateEmail(emailId ,status)
//   res.send(data)
// });

emailRouter.put("/garbage/", async function (req, res) {
  try {
    const userEmail = req.email;
    const emailId = req.body._id;
    const status = req.body.status; 
    if (!status) {
      throw new Error("Missing status in the request body");
    }

    0
    let data = await emailServices.updateEmail(emailId, status, userEmail);

    res.send(data);
  } catch (error) {
    console.error("Error updating email:", error.message);
    res.status(400).send({ error: error.message });
  }
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

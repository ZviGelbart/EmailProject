const express = require("express");
const emailRouter = express.Router();
const emailServices = require("../services/email.services");

emailRouter.get("/", async function(req,res){
    let data= await emailServices.getAllEmails();
    res.send(data)
})

module.exports=emailRouter;
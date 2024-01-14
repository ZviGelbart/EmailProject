const express = require("express");
const emailRouter = express.Router();
const emailServices = require("../services/email.services");


// all inbox emails
emailRouter.get("/inbox", async function(req,res){
    const email = "dudi@gmail.com"
    let data= await emailServices.getAllE
})

emailRouter.get("/inbox/:email", async function(req,res){
    const email = "tzvi@gmail.com"
    const sender = "dudi@gmail.com"
    let data= await emailServices.getAllEmails({sender : sender, destination: email});
    res.send(data)
})


emailRouter.post("/", async function(req, res){
    try {
        const data = await emailServices.sendEmail(req.body)
        res.send(data)
    }catch(err){
        res.status(400).send(err);
    }

})

module.exports=emailRouter;
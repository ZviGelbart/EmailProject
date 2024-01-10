const express = require("express");
const emailRouter = express.Router();
const emailServices = require("../services/email.services");

emailRouter.get("/", async function(req,res){
    let data= await emailServices.getAllEmails();
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
const controller = require("../dal/email.controller");

async function getAllEmails(){
    const email=await controller.read();
    return email;
}


module.exports={getAllEmails};
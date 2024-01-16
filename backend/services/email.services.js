const controller = require("../dal/email.controller");
const userExist = require('../services/user.services')

async function getAllEmails(filter){
    const email = await controller.read(filter);
    console.log(email);
    return email;
}

async function sendEmail(data){
  const senderExist = await userExist.ifUserExist(data.sender)
  const destinationExist = await userExist.ifUserExist(data.destination)
  if(senderExist & destinationExist){
    let errorList = await validation(data);
    if (errorList.length) throw errorList;
    let mesg = {
          sender: data.sender,
          destination: data.destination,
          topic: data.topic,
          body: data.body,
          Date: new Date()
    }
      let newMes = await controller.create(mesg);
      return newMes;
  }else{
    return "email is not exist"
  }
  }
  

async function validation(data) {
    let errors = [];
    if (!data.sender) errors.push("sender is not exist");
    if (!data.destination) errors.push("destination is not exist");
    if (!data.topic) errors.push("topic is not exist");
    if (!data.body) errors.push("body is not exist");
    return errors;
  }
module.exports={getAllEmails, sendEmail};
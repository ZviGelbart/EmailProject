const controller = require("../dal/email.controller");
const userExist = require("../services/user.services");
const messagesController = require("../dal/messages.controller");

async function getAllEmails(filter) {
  const email = await controller.read(filter);
  return email;
}

async function sendEmail(data) {
  const senderExist = await userExist.ifUserExist({email:data.sender});
  for( let u of data.destinations){
    let destinationExist = await userExist.ifUserExist({email: u})
    console.log(destinationExist);
  }
  
  if(senderExist) {
    let errorList = await validation(data);
    if (errorList.length) throw errorList;
    let mesg = {
      sender: { email: data.sender },
      destinations: data.destinations.map(email => ({ email })),
      topic: data.topic,
      body: data.body,
      Date: new Date(),
    };
    let newMes = await controller.create(mesg);

  

    return newMes;
  } else {
    return "email is not exist";
  }
}

async function validation(data) {
  let errors = [];
  if (!data.sender) errors.push("sender is not exist");
  if (!data.destinations) errors.push("destination is not exist");
  if (!data.topic) errors.push("topic is not exist");
  if (!data.body) errors.push("body is not exist");
  return errors;
}
module.exports = { getAllEmails, sendEmail };

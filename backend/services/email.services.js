const controller = require("../dal/email.controller");
const userExist = require("../services/user.services");
const messagesController = require("../dal/messages.controller");

async function getAllEmails(filter) {
  const email = await controller.read(filter);
  return email;
}

async function sendEmail(data) {
  // const senderExist = await userExist.ifUserExist({email:data.sender});
  let exist = [];
  let notExist = [];
  for (let u of data.destinations) {
    let destinationExist = await userExist.ifUserExist({ email: u });
    if (destinationExist && destinationExist.email) {
      exist.push(destinationExist.email);
    } else {
      notExist.push(u);
    }
  }

  let errorList = await
  (data);
  if (errorList.length) throw errorList;
  let mesg = {
    sender: { email: data.sender },
    destinations: exist.map((email) => ({ email })),
    topic: data.topic,
    body: data.body,
    Date: new Date(),
  };

  console.log(exist);
  console.log(notExist);

  let newMes = await controller.create(mesg);
  let result = []
  for(let { email } of newMes.destinations) {
    result.push({
      email, status: "SUCCESS"
    })
  }
  for(let email of notExist) {
    result.push({
      email, status: "NOT_EXISEST"
    })
  }





  return result;
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

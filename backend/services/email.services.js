const controller = require("../dal/email.controller");
const userExist = require("../services/user.services");

async function getAllEmails(filter) {
  const email = await controller.read(filter);
  return email;
}
// async function getEmail(filter) {
//   const email = await controller.readOne(filter);
//   return email;
// }

// async function updateEmail(emailId,status){
//  let mess = await controller.readOne({_id:emailId})
//  if(!mess) throw "email is not exist"
//  let meesToUpdate = {
//   "sender.email": status.sender.email,
//   "sender.status":status.sender.status,
//   "destinations.email": status.destinations.email,
//   "destinations.status":"garbage",
//   topic:status.topic,
//   body:status.body
//  }
//   let updateStatus = await controller.update(mess._id, meesToUpdate)
//   return updateStatus
//  }

async function updateEmail(emailId, status, userEmail) {

  const mess = await controller.readOne({ _id: emailId  });
  console.log(mess);
//todo check user in des

const userIndex = mess.destinations.findIndex(user => user.email === userEmail);
mess.destinations[userIndex].status = status;

return controller.update(mess);
}
async function sendEmail(data, senderEmail) {
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

  let errorList = await validation(data, senderEmail);
  if (errorList.length) throw errorList;

  // אם יש נמענים קיימים, יצירת מבנה המייל
  if (exist.length > 0) {
    let mesg = {
      sender: { email: senderEmail },
      destinations: exist.map((email) => ({ email })),
      topic: data.topic,
      body: data.body,
      Date: new Date(),
    };

    
    let newMes = await controller.create(mesg);

    
    let result = [];
    for (let { email } of newMes.destinations) {
      result.push({
        email,
        status: "SUCCESS",
      });
    }
    for (let email of notExist) {
      result.push({
        email,
        status: "NOT_EXIST",
        });
    }

    return result;
  } else {
    return notExist.map((email) => ({
      email,
      status: "NOT_EXIST",
    }));
  }
}

async function validation(data, senderEmail) {
  let errors = [];

  let senderExist = await userExist.ifUserExist({ email: senderEmail });
  if (!senderExist || !senderExist.email) {
    errors.push("Sender does not exist");
  }

  if (!senderEmail) errors.push("Sender is not exist");
  if (!Array.isArray(data.destinations)) {
    errors.push("Destinations should be an array");
  } else {
    if (data.destinations.length === 0) {
      errors.push("Destinations array is empty");
    }
  }
  if (!data.topic) errors.push("Topic is not exist");
  if (!data.body) errors.push("Body is not exist");

  return errors;
}

module.exports = { getAllEmails, sendEmail, updateEmail};

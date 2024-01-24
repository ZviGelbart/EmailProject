const emailModel = require("./email.model");

async function read(filter, status) {
  let condition = {}
  if(status === 'outbox') {
    condition = {...filter}
    condition["sender.status"] = status;
  }else if(status === 'inbox'){
    condition["destinations"] = {$elemMatch: {email: filter["destinations.email"], status}};
  }
  return emailModel.find({ ...condition});
}




async function readOne(filter) {
  return emailModel.findOne(filter);
}
async function create(data) {
  console.log(data);
  return emailModel.create(data);
}
async function update(newMessage){
  return newMessage.save();
}
// *****create*****
// const go =async () => {
//     let email = {
//         sender: 'exmple@gmail.com',
//         destination: ['recipient1@gmail.com', 'recipient2@gmail.com'],
//         topic: 'Subject of the email',
//         body: 'Content of the email'
//         }
//         const res=  await create(email)
//     console.log(res)

// }
// go()

module.exports = { read, create, readOne,update };

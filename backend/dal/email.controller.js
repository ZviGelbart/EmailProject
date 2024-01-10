const emailModel = require("./email.model");

async function read(filter){
    return emailModel.find({...filter})
}





// *****create*****
let email = {
    sender: 'example@gmail.com',
    destination: ['recipient1@gmail.com', 'recipient2@gmail.com'],
    topic: 'Subject of the email',
    body: 'Content of the email'
    }
async function go  () {
  
    const res=  await read(email)
    console.log(res)
}

module.exports = { read };

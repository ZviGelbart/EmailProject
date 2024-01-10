const emailModel = require("./email.model");

async function read(filter){
    return emailModel.find({...filter})
}

async function create(data){
    return emailModel.create(data)
}




// *****create*****
// const go =async () => {
//     let email = {
//         sender: 'example@gmail.com',
//         destination: ['recipient1@gmail.com', 'recipient2@gmail.com'],
//         topic: 'Subject of the email',
//         body: 'Content of the email'
//         }
//         const res=  await create(email)
//     console.log(res)

// }
// go()


  
    


module.exports = { read , create};

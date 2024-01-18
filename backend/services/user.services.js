const jsonwebtoken = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const controller = require("../dal/user.controller")

async function getAllUser() {
    const user = await controller.read()
    console.log(user);
    return user
}

async function getUser(param){
    let filter = {}
    if(!filter) filter = param
    let user = await controller.read(filter)
    if(!user) throw "user is not exist"
    return user
}

async function ifUserExist(data) {
    const userExist = await controller.readOne({email: data.email})
    return userExist
    
}
async function ifUserExist(data) {
    const userExist = await controller.readOne({email: data.email})
    return userExist
    
}

async function createUser(data) {
    // exist by email
    const userExist = await controller.readOne({email: data.email});
    if(userExist) throw "The user already exists "

    //validation
    let errorList = await validation(data)
    if(errorList.length) throw errorList

    // map to model >> user (object)
    const hashed = await bcrypt.hash(data.password, 10);
    let user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashed,
        dateOfBirth: new Date()
    }
    let newUser = await controller.create(user)
    return newUser
}



// app.post("/users", async (req, res) => {
//     //validation
//     try {
        
//         users.push({
//             username: req.body.username,
//             password: hashed,
//             age: req.body.age,
//             id: usersId++,
//         });
//         res.status(201).send();
//     } catch (error) {
//         console.log(error);
//         res.status(500).send();
//     }
//   });


async function validation(data) {
    let errors = []
    if (!data.firstName) errors.push("firstName is not exist");
    if (!data.lastName) errors.push("latstName is not exist");
    if (!data.email) errors.push("email is not exist");
    if (!data.password) errors.push("password is not exist");
    return errors
    
}
module.exports = {
    getAllUser,
    createUser,
    ifUserExist,
}
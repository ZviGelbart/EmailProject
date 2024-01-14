const controller = require("../dal/user.controller")

async function getAllUser() {
    const user = await controller.read()
    return user
}

async function getUser(param){
    let filter = {}
    if(!filter) filter = param
    let user = await controller.read(filter)
    if(!user) throw "user is not exist"
    return user
}

async function createUser(data) {
    // exist by email
    const userExist = await controller.readOne({email: data.email});
    if(userExist) throw "The user already exists "

    //validation
    let errorList = await validation(data)
    if(errorList.length) throw errorList

    // map to model >> user (object)
    let user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        dateOfBirth: new Date()
    }
    let newUser = await controller.create(user)
    return newUser
}

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

}
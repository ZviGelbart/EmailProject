const userModel = require("./user.model");
const DB = require("./db");
DB.connect;

async function create(data) {
  return userModel.create(data);
}

async function read(filter) {
  return userModel.find({ ...filter});
}

async function readOne(filter){
  return userModel.findOne({...filter})
}

async function updateToken(filter, token) {
  console.log(filter, token);
  return userModel.updateOne({...filter}, {$push: {refreshToken: token}});
}

async function del(filter, data) {
  return update(filter, data);
}


module.exports = {  create,read, updateToken,del, readOne};

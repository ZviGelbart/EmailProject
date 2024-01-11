const userModel = require("./user.model");
const DB = require("./db");
DB.connect;

async function create(data) {
  return userModel.create(data);
}
async function readOne(filter){
  return userModel.findOne({...filter, isActive: true})
}

async function read(filter) {
  return userModel.find({ ...filter, isActive: true });
}

async function update(filter, data) {
  return userModel.updateMany(filter, data);
}

async function del(filter, data) {
  return update(filter, data);
}


module.exports = {  create,read, update,del, readOne};

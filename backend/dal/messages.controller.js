const messageModel = require('./messages.model')
const DB = require('./db')
DB.connect

async function create(data) {
     return messageModel.create(data)
}

module.exports = {
    create,
    
}
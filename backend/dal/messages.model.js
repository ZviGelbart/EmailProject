const mongoose = require('mongoose')
require('./email.model')
require('./user.model')
const messageSchema = new mongoose.Schema ({
    userId : {
        type :mongoose.SchemaTypes.ObjectId,
        ref:'user',
        required: true
    },
    status: {
        type : String,
        required: true,
    },
    emailId: {
        type : mongoose.SchemaTypes.ObjectId,
        ref: 'email',
        required: true,
    },
    read : {
        type: Boolean,
        default: false
    }
})

const messageModel = mongoose.model('message', messageSchema)
module.exports = messageModel

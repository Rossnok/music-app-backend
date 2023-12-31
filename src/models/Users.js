const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    }
})

module.exports = model('User', UserSchema)
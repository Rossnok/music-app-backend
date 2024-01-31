const { Schema, model } = require('mongoose')

//unique permite que un campo sea unico en el esquema (por averiguar si hace la revision en la base de datos antes de registrarlo)
//dropDups permite que la query sea dropeada si el valor ya existe en la base de datos

const UserSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'Username required'],
        unique: {value: true, message: 'Username already exist'},
        dropDups: {value: true, message: 'Username already exist'},
    },
    password: {
        type: String,
        required: [true, 'Password required'],
    },
    email: {
        type: String,
        required: [true, 'Email required'],
        unique: {value: true, message: 'Email already exist'},
        dropDups: {value: true, message: 'Email already exist'},               
    }
})

module.exports = model('User', UserSchema)
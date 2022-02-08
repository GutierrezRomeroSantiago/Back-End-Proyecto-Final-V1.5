import {Schema, model } from 'mongoose'

const UserSchema = new Schema({
    _user: {
        type: String,
        required: true,
        unique: true
    },
    _password: {
        type: String,
        required: true
    }
},{ versionKey: false })

export const Users = model('usuarios', UserSchema)

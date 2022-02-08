"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    _user: {
        type: String,
        required: true,
        unique: true
    },
    _password: {
        type: String,
        required: true
    }
}, { versionKey: false });
exports.Users = (0, mongoose_1.model)('usuarios', UserSchema);

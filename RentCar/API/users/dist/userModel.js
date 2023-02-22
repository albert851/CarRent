"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var joi_password_1 = require("joi-password");
var joiPassword = joi_1["default"].extend(joi_password_1.joiPasswordExtendCore);
// export enum Role {
//   ADMIN = "admin",
//   USER = "user"
// }
var UserSchema = new mongoose_1["default"].Schema({
    email: {
        type: String,
        unique: true,
        requierd: [true, "user must have email"]
    },
    userName: String,
    role: {
        type: String,
        "enum": ['admin', 'user'],
        "default": "user"
    },
    password: String,
    userRent: {
        type: "boolean",
        "default": false
    }
});
var UserModel = mongoose_1["default"].model("users", UserSchema);
exports["default"] = UserModel;
exports.UserValidation = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    username: joi_1["default"].string().alphanum().min(3).max(16).required(),
    password: joiPassword
        .string()
        .min(5)
        .max(16)
        .required(),
    repeatPassword: joi_1["default"].ref('password')
});

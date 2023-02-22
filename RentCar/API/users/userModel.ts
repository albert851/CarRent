import mongoose from "mongoose";
import Joi, { boolean } from "joi";
import { joiPasswordExtendCore } from "joi-password";

const joiPassword = Joi.extend(joiPasswordExtendCore);

// export enum Role {
//   ADMIN = "admin",
//   USER = "user"
// }

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    requierd: [true, "user must have email"]
  },
  userName: String,
  role: { 
    type: String,
    enum: ['admin', 'user'],
    default: "user"
   },
  password: String,
  userRent: {
    type: "boolean",
    default: false
  },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;

export const UserValidation = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(3).max(16).required(),
  password: joiPassword
    .string()
    .min(5)
    .max(16)
    .required(),
  repeatPassword: Joi.ref('password')
});
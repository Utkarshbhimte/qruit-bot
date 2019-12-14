import * as mongoose from "mongoose";
import { User } from "@entities";

const Schema = mongoose.Schema;

export const UserSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      required: "Enter a first name"
    },
    lastName: {
      type: String,
      required: "Enter a first name"
    },
    email: {
      type: String
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;

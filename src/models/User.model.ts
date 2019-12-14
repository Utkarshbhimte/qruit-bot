import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema(
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

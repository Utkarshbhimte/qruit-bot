import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CompanySchema = new Schema(
  {
    slackId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    slackToken: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

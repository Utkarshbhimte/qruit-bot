import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const CompanySchema = new Schema(
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

const CompanyModel = mongoose.model("companies", CompanySchema);
export default CompanyModel;

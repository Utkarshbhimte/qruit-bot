import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CompanySchema = new Schema(
  {
    slackTeamId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    slackToken: {
      type: String,
      required: true,
    },
    slackScope: {
      type: String,
      required: true,
    },
    primaryUserSlackId: {
      type: String,
      required: true,
    },
    botUserId: {
      type: String,
      required: true,
    },
    botAccessToken: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

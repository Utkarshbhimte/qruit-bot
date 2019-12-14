import mongoose from "mongoose";
import { CompanySchema } from "src/models/Company.model";

export interface ICompany {
  id?: string;
  slackId: string;
  name: string;
  slackToken: string;
}

export class Company implements ICompany {
  public id?: string;
  public slackId: string;
  public name: string;
  public slackToken: string;

  private readonly collection = mongoose.model("companies", CompanySchema);

  constructor(args: ICompany) {
    this.id = args.id;
    this.slackId = args.slackId;
    this.name = args.name;
    this.slackToken = args.slackToken;
  }

  insert = () => {
    this.collection.
  };
}

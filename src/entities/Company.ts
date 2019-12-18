import mongoose, { Model, Document } from 'mongoose';
import { CompanySchema } from 'src/models/Company.model';

export interface ISlackCompanyResponse {
  ok: boolean;
  error?: string;
  access_token: string;
  scope: string;
  user_id: string;
  team_id: string;
  enterprise_id?: any;
  team_name: string;
  bot: Bot;
}

interface Bot {
  bot_user_id: string;
  bot_access_token: string;
}

export interface ICompany {
  slackTeamId: string;
  name: string;
  slackToken: string;
  slackScope: string[];

  // user who created
  primaryUserSlackId: string;
  botUserId: string;
  botAccessToken: string;
}

export interface ICompanyDocument extends ICompany, Document {}

export class Company implements ICompany {
  public slackTeamId: string;
  public name: string;
  public slackToken: string;
  public slackScope: string[];
  public primaryUserSlackId: string;
  public botUserId: string;
  public botAccessToken: string;
  public static readonly collection: Model<ICompanyDocument> = mongoose.model(
    'companies',
    CompanySchema,
  );

  constructor(args: ICompany) {
    this.slackTeamId = args.slackTeamId;
    this.name = args.name;
    this.slackToken = args.slackToken;
    this.slackScope = args.slackScope;
    this.primaryUserSlackId = args.primaryUserSlackId;
    this.botUserId = args.botUserId;
    this.botAccessToken = args.botAccessToken;
  }
}

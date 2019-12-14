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

  constructor(args: ICompany) {
    this.id = args.id;
    this.slackId = args.slackId;
    this.name = args.name;
    this.slackToken = args.slackToken;
  }
}

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  isPrimary: boolean;
}

export class User implements IUser {
  public id?: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public isPrimary: boolean;

  constructor(args: IUser) {
    this.id = args.id;
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.email = args.email;
    this.isPrimary = args.isPrimary;
  }
}

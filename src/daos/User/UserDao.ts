import { IUser } from "@entities";
import UserModel from "src/models/User.model";
import { Document } from "mongoose";

export interface IUserDao {
  getAll: () => Promise<IUser[]>;
  add: (user: IUser) => Promise<Document>;
  update: (user: IUser) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

export class UserDao implements IUserDao {
  /**
   *
   */
  public async getAll(): Promise<IUser[]> {
    // TODO
    return [] as any;
  }

  /**
   *
   * @param user
   */
  public async add(user: IUser): Promise<Document> {
    const userData = await UserModel.findOneAndUpdate(
      { slackId: user.slackId },
      user,
      {
        new: true,
        upsert: true
      }
    );
    console.log("TCL: UserDao -> userData", userData);

    return userData;
  }

  /**
   *
   * @param user
   */
  public async update(user: IUser): Promise<void> {
    // TODO
    return {} as any;
  }

  /**
   *
   * @param id
   */
  public async delete(id: number): Promise<void> {
    // TODO
    return {} as any;
  }
}

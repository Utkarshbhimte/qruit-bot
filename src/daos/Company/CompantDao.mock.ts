import { ICompany } from "@entities";
import { getRandomInt } from "@shared";
import { MockDaoMock } from "../MockDb/MockDao.mock";
import { ICompanyDao } from "./CompanyDao";

export class CompanyDao extends MockDaoMock implements ICompanyDao {
  public async getAll(): Promise<ICompany[]> {
    try {
      const db = await super.openDb();
      return db.companys;
    } catch (err) {
      throw err;
    }
  }

  public async add(company: ICompany): Promise<void> {
    try {
      const db = await super.openDb();
      company.id = getRandomInt();
      db.companys.push(company);
      await super.saveDb(db);
    } catch (err) {
      throw err;
    }
  }

  public async update(company: ICompany): Promise<void> {
    try {
      const db = await super.openDb();
      for (let i = 0; i < db.companys.length; i++) {
        if (db.companys[i].id === company.id) {
          db.companys[i] = company;
          await super.saveDb(db);
          return;
        }
      }
      throw new Error("Company not found");
    } catch (err) {
      throw err;
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      const db = await super.openDb();
      for (let i = 0; i < db.companys.length; i++) {
        if (db.companys[i].id === id) {
          db.companys.splice(i, 1);
          await super.saveDb(db);
          return;
        }
      }
      throw new Error("Company not found");
    } catch (err) {
      throw err;
    }
  }
}

import { ICompany } from "@entities";

export interface ICompanyDao {
  add: (company: ICompany) => Promise<void>;
  update: (company: ICompany) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

export class CompanyDao implements ICompanyDao {
  /**
   *
   * @param company
   */
  public async add(company: ICompany): Promise<void> {
    // TODO
    return {} as any;
  }

  /**
   *
   * @param company
   */
  public async update(company: ICompany): Promise<void> {
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

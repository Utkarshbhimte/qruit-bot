import { ICompany, Company, ISlackCompanyResponse } from '@entities';

export class CompanyDao {
  /**
   *
   * @param company
   */
  public static async add(
    companyResponse: ISlackCompanyResponse,
  ): Promise<void> {
    const company = await Company.collection.create({
      slackTeamId: companyResponse.team_id,
      name: companyResponse.team_name,
      slackToken: companyResponse.access_token,
      slackScope: companyResponse.scope,
      primaryUserSlackId: companyResponse.user_id,
      botUserId: companyResponse.bot.bot_user_id,
      botAccessToken: companyResponse.bot.bot_access_token,
    });

    console.log({ company });

    return {} as any;
  }

  /**
   *
   * @param company
   */
  public static async update(company: ICompany): Promise<void> {
    // TODO
    return {} as any;
  }

  /**
   *
   * @param id
   */
  public static async delete(id: number): Promise<void> {
    // TODO
    return {} as any;
  }
}

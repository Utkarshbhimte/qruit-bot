import {
  ICompany,
  Company,
  ISlackCompanyResponse,
  ICompanyDocument,
} from '@entities';

export class CompanyDao {
  /**
   *
   * @param companyResponse
   */
  public static async register(
    companyResponse: ISlackCompanyResponse,
  ): Promise<ICompanyDocument> {
    const company = (await Company.collection.findOneAndUpdate(
      {
        slackTeamId: companyResponse.team_id,
      },
      {
        slackTeamId: companyResponse.team_id,
        name: companyResponse.team_name,
        slackToken: companyResponse.access_token,
        slackScope: companyResponse.scope,
        primaryUserSlackId: companyResponse.user_id,
        botUserId: companyResponse.bot.bot_user_id,
        botAccessToken: companyResponse.bot.bot_access_token,
      },
      {
        upsert: true,
      },
    )) as ICompanyDocument;

    return company;
  }

  /**
   *
   * @param companyResponse
   */
  public static async findBySlackId(
    slackTeamId: string,
  ): Promise<ICompanyDocument> {
    const company = await Company.collection.findOne({
      slackTeamId,
    });

    if (!company) {
      throw new Error('Company not available');
    }

    return company;
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

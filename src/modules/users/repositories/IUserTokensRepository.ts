import UserToken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokensReposotory {
  generate(user_id: string): Promise<UserToken>;
}

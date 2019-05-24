export default interface IUserInfo {
  /**
   * 获取用户名称
   */
  getUserName(): string;

  /**
   * 获取用户余额
   */
  getBalance(): number;
}

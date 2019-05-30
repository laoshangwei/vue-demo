import UserInfo from "../entity/UserInfo";
import IUserInfo from "../interface/UserInfo.interface";
export default class UserInfoServer implements IUserInfo {
  userInfo: UserInfo;
  constructor(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }
  public init(): void {
    //http request
  }
  getUserName(): string {
    throw new Error("Method not implemented.");
  }
  getBalance(): number {
    throw new Error("Method not implemented.");
  }
}




export default class UserInfo {
  banlace: number;
  winOrLose: number;
  outstanding: number;
  username: string;

  constructor(
    balance: number,
    lotterywinlose: number,
    outstanding: number,
    username: string
  ) {
    this.banlace = balance;
    this.winOrLose = lotterywinlose;
    this.outstanding = outstanding;
    this.username = username;
  }
}

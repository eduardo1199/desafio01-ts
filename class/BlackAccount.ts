import { DioAccount } from "./DioAccount"

export class BlackAccount extends DioAccount {
  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number) => {
    const newValueBalance = this.getBalance() + value + 10

    this.setBalance(newValueBalance)
  }
}
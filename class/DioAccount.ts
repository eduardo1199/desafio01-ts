export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    const newValueBalance = this.balance + value

    this.setBalance(newValueBalance)
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.canWithdraw(value)){
      const newValueBalance = this.balance - value

      this.setBalance(newValueBalance)
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private canWithdraw = (value: number): boolean => {
    if(value > this.balance) {
      throw new Error('Saldo insufiente para saque!')
    }

    return true
  }
}

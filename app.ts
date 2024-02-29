import { PeopleAccount } from './class/PeopleAccount'
import { BlackAccount } from './class/BlackAccount'

const peopleAccount = new PeopleAccount(1, 'Eduardo' , 10)
const blackAccount = new BlackAccount(2, 'Eduardo' , 11)

peopleAccount.deposit(10)

console.log(peopleAccount.getBalance())

peopleAccount.withdraw(5)

console.log(peopleAccount.getBalance())

blackAccount.deposit(10)

console.log(blackAccount.getBalance()) 

blackAccount.withdraw(50) // error

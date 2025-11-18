//encapsulate mane private kore rakha
//?Protected o thake encapsulation er moddhe but protected good
class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    private addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }
    callHiddenMethod(number: number) {
        this.addBalance(100)
    }

}

class StudentBankAccount {

}

const diptaAccount = new BankAccount(12, 'Dipta', 56)
diptaAccount.callHiddenMethod(100);
diptaAccount.callHiddenMethod(200);
console.log(diptaAccount)

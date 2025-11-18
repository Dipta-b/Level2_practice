class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // addBalance(balance: number) {
    //     this.userBalance = this.userBalance + balance;
    // }
    set AddBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }
    get getBalance(): number {
        return this.userBalance
    }
}



const diptaAccount = new BankAccount(12, 'Dipta', 56)
diptaAccount.AddBalance = 100;
diptaAccount.AddBalance = 200;
console.log(diptaAccount.getBalance)

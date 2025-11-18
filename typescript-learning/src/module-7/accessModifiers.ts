class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }


}


const diptaAccount = new BankAccount(12, 'Dipta', 56)
diptaAccount.addBalance(100);
diptaAccount.addBalance(200);
console.log(diptaAccount)

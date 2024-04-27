class BankAccount {
    constructor(accHolder, accNumber, balance) {
        this.accHolder = accHolder
        this.accNumber = accNumber
        this.balance = balance
    }

    // Methods
    deposit(amt) {
        return amt > 0 ? this.balance + amt : throw new Error('Amount should positive number!')
    }

    withdraw(amt) {
        return amt > 0 ? this.balance - amt : throw new Error('Amount should positive number!')
    }
}
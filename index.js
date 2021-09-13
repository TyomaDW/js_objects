const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const wallet = {
  // Текущий баланс счета
  balance: 100,

  transactions: [],

  createTransaction(amount, type) {
    return {
      id: this.transactions.length,
      amount,
      type,
    };
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'Transaction not exist';
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

wallet.deposit(50);
wallet.withdraw(30);
wallet.deposit(150);
wallet.deposit(20);
wallet.withdraw(10);

console.log(wallet.getBalance());
console.log(wallet.transactions);
console.log(wallet.getTransactionDetails(3));
console.log(wallet.getTransactionTotal(Transaction.DEPOSIT));
console.log(wallet.getTransactionTotal(Transaction.WITHDRAW));

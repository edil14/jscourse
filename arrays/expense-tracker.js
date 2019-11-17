//Expense ...dscription, amount
//addExpenses...description, amount
//getAccountSummary

const account ={
    name: 'Gashaw',
    expenses: [],
    income :[],

    addIncome: function(description, amount){

        this.income.push(
            {
                decription: description,
                amount: amount
            }
        )

    },

    addExpenses: function(description, amount){
        this.expenses.push(
            {
                decription: description,
                amount: amount
            }
        )

    },
    addAccountSummary: function(){
        let totalExpenses= 0
       let  totalIncome =0
       let totalBalance =0
        this.expenses.forEach(
            function(expenses){
                totalExpenses=  totalExpenses + expenses.amount
            }
        )

        this.income.forEach(
            function(income){
                totalIncome = totalIncome + income.amount
            }

        )

        totalBalance = totalIncome - totalExpenses
        return account.name + ' has ' + '$'+ totalBalance + ' Balances' + ' from total income is ' + totalIncome
    }
}
account.addIncome('salary',2000)
account.addExpenses('rent',1000)
account.addExpenses('Coffee', 3.5)
console.log(account.addAccountSummary())
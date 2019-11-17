let myAccount ={
    name: 'Gashaw',
    expense : 0,
    income: 1000
}

let addExpense = function(account, amount){

  account.expense = account.expense + amount;

}

let addIncome = function (account, income){

    account.income = account.income =income;

}

let resetAccount = function (account){
    account.expense=0;
    account.income=0;
}

let getAccountSummary = function(account){

    let balance = account.income - account.expense;

    return 'Account for '+ account.name + ' has a current balance ' + balance + ' with income of '+ account.income;

}

addExpense(myAccount,200)
addExpense(myAccount,200)
addIncome(myAccount,3000)
console.log(getAccountSummary(myAccount));
resetAccount(myAccount)
console.log(getAccountSummary(myAccount));




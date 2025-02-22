function tally(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i].amount
    }
    return total
}


let income = [{description: 'Random 1', amount: 24}, {description: 'Random 2', amount: 30}, {description: 'Random 3', amount: 40}]
let expenses = [{description: 'Expense 1', amount: 14}, {description: 'Expense 2', amount: 24}, {description: 'Expense 3', amount: 24}]

let totalExpenses = tally(expenses)
let totalIncome = tally(income)
let balance = totalIncome - totalExpenses

console.log(totalIncome, totalExpenses, balance)
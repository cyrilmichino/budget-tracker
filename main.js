function tally(arr, type) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        if (type == arr[i].type) {
            total += arr[i].amount
        }
    }
    return total
}

function displayTable() {
    

}

function openModal() {

}

function closeModal() {

}


let transactions = [{type: 'income', description: 'Random 1', amount: 2000}, {type: 'income', description: 'Random 2', amount: 3000}, {type: 'income', description: 'Random 3', amount: 4000},
    {type: 'expense', description: 'Expense 1', amount: 1000}, {type: 'expense', description: 'Expense 2', amount: 2400}, {type: 'expense', description: 'Expense 3', amount: 2400}]

let totalIncome = tally(transactions, 'income')
let totalExpenses = tally(transactions, 'expense')
let balance = totalIncome - totalExpenses

document.getElementById('balance').innerHTML = balance.toLocaleString('en')
document.getElementById('total-income').innerHTML = totalIncome.toLocaleString('en')
document.getElementById('total-expenses').innerHTML = totalExpenses.toLocaleString('en')
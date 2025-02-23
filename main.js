function tally(arr, type) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        if (type == arr[i].type) {
            total += arr[i].amount
        }
    }
    return total
}

function displayTable(transactions) {
    const transactionTable = document.getElementById('transactions')
    tableContent = `<tr>\n<th></th>\n<th scope="col">Type</th>\n<th scope="col">Description</th>\n<th scope="col">Amount</th>\n<th scope="col">Action</th>\n</tr>\n`
    
    for (let i = 0; i < transactions.length; i++){
        tableContent += `<tr>\n<td>${transactions[i].id}</td>\n<td>${transactions[i].type}</td>\n<td>${transactions[i].description}</td>\n<td>${transactions[i].amount.toLocaleString('en')}</td>\n
        <td><button type="submit" onclick="deleteTransaction()" class="btn-danger">Delete</button></td>\n</tr>\n`
    }
    transactionTable.innerHTML = tableContent
}

function addTransaction() {
    // Get form input elements
    const inputType = document.getElementById('type')
    const inputDescription = document.getElementById('description')
    const inputAmount = document.getElementById('amount')

    // Get form values from form input
    const type = inputType.value
    const description = inputDescription.value
    const amount = inputAmount.value

    // Tabulate transaction ID and add form data to array
    const id = transactions[transactions.length - 1].id + 1
    transactions.push({id:id,type:type,description:description,amount:amount})

    // Reset form values (Make them empty)
    inputType.value = ""
    inputDescription.value = ""
    inputAmount.value = ""

    // Refresh the transactions table
    displayTable(transactions)
}

function deleteTransaction(transactions) {
    displayTable(transactions)
}

function openModal() {

}

function closeModal() {

}


let transactions = [{id:1, type: 'income', description: 'Random 1', amount: 2000}, {id:2, type: 'income', description: 'Random 2', amount: 3000}, {id:3, type: 'income', description: 'Random 3', amount: 4000},
    {id:4, type: 'expense', description: 'Expense 1', amount: 1000}, {id:5, type: 'expense', description: 'Expense 2', amount: 2400}, {id:6, type: 'expense', description: 'Expense 3', amount: 2400}]

let totalIncome = tally(transactions, 'income')
let totalExpenses = tally(transactions, 'expense')
let balance = totalIncome - totalExpenses

document.getElementById('balance').innerHTML = balance.toLocaleString('en')
document.getElementById('total-income').innerHTML = totalIncome.toLocaleString('en')
document.getElementById('total-expenses').innerHTML = totalExpenses.toLocaleString('en')

displayTable(transactions)
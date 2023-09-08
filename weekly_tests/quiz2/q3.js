/*
Pooja would like to withdraw X $US from an ATM. The cash machine will only accept the transaction if X is a multiple of 5, and Pooja's account balance has enough cash to perform the withdrawal transaction (including bank charges). For each successful withdrawal the bank charges 0.50 $US.Calculate Pooja's account balance after an attempted transaction.


Input:
1. Positive integer 0 < x <= 2000 - the amount of cash which Pooja wishes to withdraw.
2. Non-negative number 0 <= y <= 2000 - Pooja's initial account balance.
Output: Output the account balance after the attempted transaction, given as a number. If there is not enough money in the account to complete the transaction,
output the current bank balance.
*/

let current_balance = Number.parseInt(1000)

const withdrawal_func = (current_balance, withdrawal_amount) => {
    if (withdrawal_amount % 5 != 0) {
        return "Not a multiple of 5"
    }
    else if (current_balance < withdrawal_amount + 0.5) {
        return ("Not enough balance. Your balance is only " + current_balance)
    }
    else {
        let rem_bal = current_balance - withdrawal_amount - 0.5
        return ("Succesful  transaction!!Your remaining balance is " + rem_bal)
    }
}

console.log(withdrawal_func(1000, 1000))//expected output is "not enough balance"

console.log(withdrawal_func(1000, 1500))//expected output is "not enough balance"

console.log(withdrawal_func(1000, 991))//expected output is "not a multiple of 5"

console.log(withdrawal_func(1000, 500))//expected output is "success and remaining balance = 499.5"

/*
TC - O(1) as no loops are present.
SC - O(1) as no extra space was taken.
*/
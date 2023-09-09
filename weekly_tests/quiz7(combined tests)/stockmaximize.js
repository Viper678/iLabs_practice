/*
Stock Maximize

Input : 
prices = [1, 2, 100]

Output : 197.

But stocks 1,2 and sell both at 100. so we get 99 + 98 = 197 as profit.
*/

function stockmax(prices) {
    // Write your code here
    let n = prices.length
    let maxi = Number.MIN_SAFE_INTEGER
    let ans = 0
    for (let i = n - 1; i >= 0; i--) {
        maxi = Math.max(maxi, prices[i])
        if (prices[i] < maxi) {
            ans += maxi - prices[i]
        }
    }
    return ans
}

let prices = [1, 2, 100]

console.log(stockmax(prices))//expected output 197

/*
TC - O(N) as only one traversal is there
SC - O(1) as no extra space was used
*/
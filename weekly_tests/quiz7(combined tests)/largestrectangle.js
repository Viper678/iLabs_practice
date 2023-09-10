/*
Largest rectangle possible in a given array

Input : h = [1,2,3,4,5]
Output : ans = 9
*/

function largestRectangle(h) {
    // Write your code here
    let n = h.length
    let pre = new Array(n).fill(-1) // this array stores previous smaller element index
    let suf = new Array(n).fill(n) //  this array stores next smaller element index
    let ans = Number.MIN_SAFE_INTEGER
    pre[0] = -1
    suf[n - 1] = n
    for (let i = 1; i < n; i++) {
        let j = i - 1
        while (j >= 0) {
            if (h[j] < h[i]) {
                pre[i] = j
                break
            }
            else {
                j--
            }
        }
    }
    for (let i = n - 2; i >= 0; i--) {
        let j = i + 1
        while (j < n) {
            if (h[j] < h[i]) {
                suf[i] = j
                break
            }
            else {
                j++
            }
        }
    }
    for (let i = 0; i < n; i++) {
        let area = (suf[i] - pre[i] - 1) * h[i]
        ans = Math.max(ans, area)
    }
    return ans
}

let h = [1,2,3,4,5]

console.log(largestRectangle(h)) //expected output is 9

/*
TC - O(N^2) as nested loops as present.
SC - O(N) as extra arrays are used here.
*/
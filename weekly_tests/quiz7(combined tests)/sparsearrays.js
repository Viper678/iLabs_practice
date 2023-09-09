/*
Sparse Arrays 
Input :
stringList = ["aba","baba","aba","xzxb"]
queries = ["aba","xzxb","ab"]

Output:
ans = [2,1,0]
*/
function matchingStrings(stringList, queries) {
    // Write your code here
    let n = queries.length
    let m = stringList.length
    let ans = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        let temp = 0
        for (let j = 0; j < m; j++) {
            if (queries[i] === stringList[j]) {
                temp++
            }
        }
        ans[i] = temp
    }
    return ans
}

let stringList = ["aba","baba","aba","xzxb"]
let queries = ["aba","xzxb","ab"]

console.log(matchingStrings(stringList,queries))

/*
TC - O(N^2) as nested for loops are present
SC - O(1) as for computation we did take any extra space. ans array was necessary for output so it won't be considered.
*/
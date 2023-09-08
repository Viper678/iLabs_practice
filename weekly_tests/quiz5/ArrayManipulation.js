/*
Array Manipulation
*/

let queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]] //sample input
let n = 5
function arrayManipulation(n, queries) {
    let temp = [] //creating empty array
    for (let i = 0; i < n; i++) {//initializing all n elemets to 0
        temp[i] = 0
    }
    let maxi = Number.MIN_SAFE_INTEGER
    let q = queries.length
    for (let i = 0; i < q; i++) {
        for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {//iterating from a-1 to b
            temp[j] += queries[i][2] //adding k to temp[j]
            maxi = Math.max(maxi, temp[j])
        }
    }
    return maxi
}
//console.log(temp) //you can check temp[i] here
console.log(arrayManipulation(n, queries))//expected output is 200

/*
TC - O(N^2) as nested for loops are present
SC - O(N) as temporary array is used.
*/

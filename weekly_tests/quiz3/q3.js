/*
Given the arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station so that no train waits.You are given two arrays that represent the arrival and departure times of trains that stop.
( Instruction : optimise the algorithm )

Input:
arr[ ] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00},
dep[ ] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00}
Output: 3
Explanation: There are at-most three trains at a time (time between 9:40 to 12:00)

Input:
arr[ ] = {9:00, 9:40},
dep[ ] = {9:10, 12:00}
Output: 1
Explanation: Only one platform is needed.
*/
function compare(a, b) {//for sorting in ascending order
    return a - b
}
const func = (arr, dep) => {
    arr.sort(compare)//sorts in ascending order
    dep.sort(compare)
    let n = arr.length
    let m = dep.length
    let i = 1
    let j = 0
    let ans = 1
    let count = 1
    while (i < n && j < m) {
        if (arr[i] <= dep[j]) {//platform is needed due to overlap
            count++
            i++
        }
        else {  //not needed as no overlap
            count--
            j++
        }
        ans = Math.max(ans, count)
    }
    return ans
}

let arr = [900, 940, 950, 1100, 1500, 1800]
let dep = [910, 1200, 1120, 1130, 1900, 2000]

console.log(func(arr, dep))

/*
TC - O(Nlogn) as sorting takes Nlogn and this while loops takes O(n) 
SC - O(1) as no extra space was needed
 */
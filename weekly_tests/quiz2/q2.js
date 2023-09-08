/*
Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.

Note: There are no duplicates in the list.

Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
Output: 5
Explanation: The missing number between 1 to 8 is 5

*/

let nums = [1,2,4,6,3,7,8]
let n = nums.length
let actual_sum = (n+1)(n+2)/2 // sum of N natural numbers
const func=(nums,n)=>{
    let sum =0;
    for(let i=0;i<n;i++){
        sum+=nums[i];
    }
    return actual_sum-sum //difference gives us the number missing
}

console.log(func(nums,n))

/*
TC - O(N) as we run for loop once for finding sum
SC - O(1) as no additional space was used
*/
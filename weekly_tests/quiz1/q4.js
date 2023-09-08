/*\
Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 1: Input: nums = [-2,1,-3,4,-1,2,1,-5,4] 
Output: 6 
Explanation: The subarray [4,-1,2,1] has the largest sum 6. And analyse your algorithm by finding time and space
complexity.
*/

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let n = nums.length
let max_sum = Number.MIN_SAFE_INTEGER
const func = (nums,max_sum)=>{
    let sum = 0
    for(let i=0;i<n;i++){
        sum+=nums[i];
        if(sum<0){ //only taking positive values forward
            sum=0
        }
        max_sum = Math.max(max_sum,sum)
    }
  return max_sum
}


console.log(func(nums,max_sum)) //prints maximum possible sum in a sub array.
/* 
TC - It takes O(N) as only 1 for loop runs in the code
SC_- O(1) as no extra space was used
*/

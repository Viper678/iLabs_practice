/**
 The task is to find the length of the longest subsequence in a given array of integers such that all elements of the subsequence are sorted in strictly ascending order. This is called the Longest Increasing Subsequence (LIS) problem.

 Sample input : arr = [2,7,4,3,8]
 Output : 3
 */

 let arr = [2,7,4,3,8] //test input
 function longestIncreasingSubsequence(arr) {
     let n = arr.length
     let temp = []//to store the length ofincreasing subsequenece starting from that index
     temp[n-1]=1 // as one element has a length of 1
     let ans = Number.MIN_SAFE_INTEGER
     for(let i = n-2;i>=0;i--){//starting from 2nd last element
         let maxi = 0
         for(let j = i+1;j<n;j++){//checking for its right side where we get number greater than it.
             if(arr[i]<arr[j]){
                 maxi = Math.max(maxi,temp[j])//storing max value of number greater than arr[i]
             }
         }
         temp[i]=maxi+1//as we need arr[i] to it
         ans = Math.max(ans,temp[i])//storing length of maximum lenght of increasing sub-sequence
     }
     return ans
 }
 
 console.log(longestIncreasingSubsequence(arr))
 
 /*
 TC - O(n^2) due to nested for loops
 SC - O(N) as one temporary array is being used
 */
 
 
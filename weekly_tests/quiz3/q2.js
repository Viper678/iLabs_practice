/**
 You are given two sorted arrays. You need to merge these two arrays such that the initial numbers (after complete sorting) are in the first array and the remaining numbers are in the second array. ( Instruction : optimise the algorithm )

 Example 1:
 Input: arr1[ ] = {1, 5, 9, 10, 15, 20}, arr2[ ] = {2, 3, 8, 13}
 Output: arr1[ ] = {1, 2, 3, 5, 8, 9}, arr2[ ] = {10, 13, 15, 20}
 */

let nums1 = [1, 5, 9, 10, 15, 20]
let nums2 = [2, 3, 8, 13]

const func = (nums1, nums2) => { //intuition of this is based on shell sort
    let m = nums1.length
    let n = nums2.length
    let gap = Number.parseInt((m + n) / 2) + (m + n) % 2//ciel of (n+m)/2
    while (gap > 0) {
        let left = 0
        let right = gap
        while (right < m + n) {
            if (left < m && right >= m) { //left points in arr1 and right in arr2
                if (nums1[left] > nums2[right - m]) {
                    let temp = nums1[left]
                    nums1[left] = nums2[right - m]
                    nums2[right - m] = temp
                }
            }
            else if (left >= m) { // both in arr 2
                if (nums2[left - m] > nums2[right - m]) {
                    let temp = nums2[left - m]
                    nums2[left - m] = nums2[right - m]
                    nums2[right - m] = temp
                }
            }
            else { //both in arr 1
                if (nums1[left] > nums1[right]) {
                    let temp = nums1[left]
                    nums1[left] = nums1[right]
                    nums1[right] = temp
                }
            }
            left++
            right++
        }
        if (gap === 1) break //we break here ciel of 1/2 is always 1 and loop repeats infinitely
        gap = Number.parseInt(gap / 2) + (gap % 2)//gap becomes ciel of gap/2
    }
}

console.log("Before sorting nums1 is " + nums1 + " and num2 is " + nums2)


func(nums1, nums2)


console.log("After sorting nums1 is " + nums1 + " and nums2 is " + nums2)

/**
 TC - O(2N) which is basically O(N).
 Note :  It is not O(n^2) even though there are 2 while loops because the first while loops runs for approx n times and the inside while loops runs for approx n times for whole n loops of first while loop. so it is n + n = 2n approximately.
 SC - O(1)
 */
/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
     For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:
Input: x = 4 Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8 Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest
integer, 2 is returned.

Constraints:
● 0 <= x <= 231 - 1
● Try to solve in most optimized way possible.
 */


const root=(num)=>{
    if(num===1) return 1
    let temp
    for(let i =1;i<=num/2;i++){
        if(i*i<=num){
            temp=i
        }
    }
    return temp
}

console.log(root(1))//expected output 1

console.log(root(3))//expected output 1

console.log(root(4))//expected output 2

console.log(root(8))//expected output 2

console.log(root(35))//expected output 5

/*
TC - O(n) as loop runs for approx n times
SC - O(1) as no extra space was taken
 */
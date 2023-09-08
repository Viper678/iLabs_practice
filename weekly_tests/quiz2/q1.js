/*
Palindrome String Checker

A palindrome string has some properties which are mentioned below:
    A palindrome string has a symmetric structure which means that the character in the first half of the string are the same as in the rear half but in reverse order. Any string of length 1 is always a palindrome.

Write a function to check the Palindrome Print Yes or No, write the space and time complexity.

Input : abbcbba output: Yes
Input: apple output: No
*/

let temp = "abbca"
let n = temp.length

const func = (temp, n) => {
    for (let i = 0; i < n / 2; i++) {
        if (temp[i] != temp[n - i - 1]) {//checks from both front and end
            return "No"
        }
    }
    return "Yes"
}

console.log(func(temp, n))
/*
TC - O(N) as loops runs for approximately n times
SC - O(1) as no extra space is used
*/
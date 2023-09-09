/*
Bigger is greater (finding next permutation if It exists)
Input : abcdefg
output : abcdegf
*/
function biggerIsGreater(w) {
    let n = w.length;
    let ind = -1;
    let copycnt = 1;

    // Checking where arr[i-1] < arr[i]
    for (let i = n - 1; i > 0; i--) {
        let temp1 = w.charCodeAt(i);
        let temp2 = w.charCodeAt(i - 1);

        if (temp1 === temp2) {
            copycnt++;
        }

        if (temp1 > temp2) {
            ind = i - 1;
            break;
        }
    }

    // If we have a string with only 1 char then return "no answer" as per instructions
    if (copycnt === n || ind === -1) {
        return "no answer";
    }

    // Swap the characters at ind and the next greater character to its right
    for (let i = n - 1; i >= ind + 1; i--) {
        let temp1 = w.charCodeAt(ind);
        let temp2 = w.charCodeAt(i);
        if (temp2 > temp1) {
            let temp = w[ind];
            let wArray = w.split(''); //we convert string into an array as string elements are immuatble
            wArray[ind] = wArray[i];
            wArray[i] = temp;
            w = wArray.join('');//we join it back and completely modify our string
            break;
        }
    }

    let temp_sum = ind + n;
    for (let i = ind + 1; i <= Math.floor(temp_sum / 2); i++) {//reversing it from ind+1 to n-1
        let temp = w[i];
        let wArray = w.split('');
        wArray[i] = wArray[temp_sum - i];
        wArray[temp_sum - i] = temp;
        w = wArray.join('');
    }

    return w;
}

let w = "abcdefg"

console.log("The next bigger permuataion is " + biggerIsGreater(w))

/*
TC - O(N) as no nested for loops are present.
SC - O(N) as extra array is used but it can be said to be 'O(1)' as strings elements cannot be changed and we definetly need an array.
*/
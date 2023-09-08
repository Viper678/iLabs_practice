
/*
Climbing leader board
Sample input :
7
100 100 50 40 40 20 10 //ranked
4
5 25 50 120 //player

Output : 6 4 2 1
*/

function climbingLeaderboard(ranked, player) {
    let n = ranked.length
    let m = player.length
    let ans = []
    for (let i = 0; i < m; i++) {//intiliazing the value with 1
        ans[i] = 1
    }
    for (let i = 0; i < m; i++) {//iterating player array and checking with ranked array
        let temp = player[i]
        for (let j = 0; j < n; j++) {
            if (player[i] < ranked[j] && ranked[j] != temp) {//comapring values and making sure we do not comapre it with same element twice
                temp = ranked[j]
                ans[i]++
            }
        }
    }
    return ans
}
let ranked = [100,100,50,40,40,20,10]
let player = [5,25,50,120]

console.log(climbingLeaderboard(ranked,player))//expected output [6,4,2,1]
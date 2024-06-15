const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

let [N, K] = input[0].split(' ')
N = Number(N)
K = Number(K)
const isPrimes = Array(N + 1).fill(true)
let count = 0
isPrimes[0] = isPrimes[1] = false

for(let i = 2; i <= N; i++) {
    if(!isPrimes[i]) continue

    for (let j = i; j <= N; j += i) {
        if(isPrimes[j]) {
            count += 1
            if(count === K){
                console.log(j)
                return
            }
        }
        isPrimes[j] = false
    }
}


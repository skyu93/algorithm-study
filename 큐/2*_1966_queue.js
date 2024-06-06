const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const queue = []
for(let i = 1; i < input.length; i += 2){
    const M = Number(input[i].split(' ')[1])
    const priorities = input[i+1].split(' ').map((n, i) => [i, Number(n)])
    let max = Math.max(...priorities.map(([i,p]) => p))
    let printCount = 0
    while (priorities.length > 0){
        const [idx, p] = priorities[0]
        if(max <= p) {
            priorities.shift()
            printCount += 1
            if(M === idx) {
                console.log(printCount)
                break
            }
            max = Math.max(...priorities.map(([i,p]) => p))
        } else{
            priorities.push(priorities.shift())
        }
    }
}

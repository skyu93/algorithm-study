const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')

const M = Number(input[1])
const list = input[2].split(' ').map(Number)

let result = 0
list
    .forEach((n, i)=> {
    for(let j = i + 1; j < list.length; j++) {
        if(n + list[j] === M) {
            result += 1
        }
    }
})
console.log(result)

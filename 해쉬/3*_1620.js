const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')


const [N, M] = input[0].split(' ')

const dictionary = new Map()
const list = []
for(let i = 1; i <= Number(N); i++) {
    dictionary.set(input[i], i)
    list.push(input[i])
}
for(let i = 1; i <= Number(M); i++) {
    const value = input[i + Number(N)]
    if(isNaN(Number(value))) {
        console.log(dictionary.get(value))
    }else {
        console.log(list[Number(value) - 1])
    }
}

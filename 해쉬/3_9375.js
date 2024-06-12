const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const count = Number(input.shift())
let index = 0


for (let i = 0; i < count; i++) {
    const length = index + Number(input[index++])
    const map = new Map()
    for (; index <= length; index++) {
        const [_, category] = input[index].split(' ')
        map.set(category, (map.get(category) ?? 0) + 1)
    }
    const result = [...map.values()].reduce((a, b) => a * (b + 1), 1)
    console.log(result-1)
}


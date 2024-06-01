const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');

const map = new Map()
let max = 0
const answer = (str) => {
    for(let i = 0; i < str.length; i++) {
        const upper = str[i].toUpperCase()
        map.set(upper, (map.get(upper) ?? 0) + 1)
        max = Math.max(max, map.get(upper))
    }
    const alphabets = Array.from(map.entries()).filter(([_, v]) => v === max)
    map.clear()
    max = 0
    return alphabets.length === 1 ? alphabets[0][0] : '?'
}
console.log(answer(input[0]))

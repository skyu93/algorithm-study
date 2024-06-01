const fs = require('fs');
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n');

const map = new Map()
for(let i = 1; i < input.length; i++) {
    const [_, ext] = input[i].split('.')
    map.set(ext, (map.get(ext) ?? 0) + 1)
}

let result = ''
Array
    .from(map.keys())
    .sort()
    .forEach(ext => {
        result += `${ext} ${map.get(ext)}\n`
    })
// trim() newline도 제거!
console.log(result.trim())


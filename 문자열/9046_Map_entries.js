const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');
//< /dev/stdin

const length = Number(input[0])
for(let i = 0; i < length; i++) {
    const str = input[i+1]
    const obj = {}
    let maxCount = 0
    Array(...str).forEach(v => {
        if(v === ' ') return
        obj[v] = obj[v] ? obj[v] + 1 : 1
        maxCount = Math.max(maxCount, obj[v])
    })
    const entries = Object.entries(obj).filter(([_, v]) => v === maxCount)
    console.log(entries.length === 1 ? entries[0][0] : '?')
}


const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');

const length = Number(input[0])
for(let i = 1; i < length+1; i++) {
    const str = input[i]
    const obj = new Map()
    let maxCount = 0
    Array
        .from(str)
        .forEach(v => {
            if(v === ' ') return
            obj.set(v, (obj.get(v) ?? 0) + 1)
            maxCount = Math.max(maxCount, obj.get(v))
    })
    const entries = Object.entries(obj).filter(([_, v]) => v === maxCount)
    console.log(entries.length === 1 ? entries[0][0] : '?')
}


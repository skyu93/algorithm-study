const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');
//< /dev/stdin

const list = Array(15 * 5).fill('')
input.forEach((str, i) => {
    Array(...str).forEach((s, idx) => {
        list[i + (idx * 5)] = s
    })
})
console.log(list.join(''))


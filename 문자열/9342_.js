const fs = require('fs')
const input = fs.readFileSync('../example.txt').toString().trim().split('\n')

const reg = /$[A-F]{0,1}A+F+C+/
input.forEach(v => {
    console.log('teo', reg.test(v), v)
})

const fs = require('fs')
const input = fs.readFileSync('../example.txt').toString().trim().split('\n')

const reg = /^[A-F]?A+F+C+[A-F]?$/
input.shift()
input.forEach(v => {
    console.log(reg.test(v) ? 'Infected!' : 'Good')
})

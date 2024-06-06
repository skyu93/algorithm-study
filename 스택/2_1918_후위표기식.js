const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const infix = input[3]
const stack = []
let count = 0
let result = ''
const operator = ['*', '/', '-', '+']


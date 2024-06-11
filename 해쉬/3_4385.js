const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')


const dictionary = new Map()

input.forEach(name => {
    dictionary.set(name, (dictionary.get(name) ?? 0) + 1)
})
Array.from(dictionary)
    .sort()
    .forEach(([name, count]) => {
        const percent = (100 / input.length) * count
        console.log(`${name} ${percent.toFixed(4)}`)
    })

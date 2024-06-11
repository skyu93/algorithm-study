const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const [_, ...rows] = input
rows
    .reduce((p,c) => {
        const nums = c.trim().match(/\d+/g)
        if(!nums || nums.length <= 0) return p
        return [...p, ...nums.map(n => BigInt(n))]
    }, [])
    .sort((a, b) => a > b ? 1 : -1)
    .forEach(num => {
        console.log(num.toString())
    })

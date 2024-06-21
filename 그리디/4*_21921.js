const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')

const days = Number(input[0].split(' ')[1])
const list = input[1].split(' ')
const map = new Map()
let sum = 0
for(let i = 0; i < days; i++) {
    sum += Number(list[i])
}
let max = sum;
map.set(sum, (map.get(sum) ?? 0) + 1)

for(let i = days; i < list.length; i++) {
    sum -= Number(list[i-days])
    sum += Number(list[i])

    max = Math.max(max, sum)
    map.set(sum, (map.get(sum) ?? 0) + 1)
}
if(max === 0){
    console.log('SAD')
}else {
    console.log(`${max}\n${map.get(max)}`)
}


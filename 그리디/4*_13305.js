const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt';
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

const distance = input[1].split(' ').map(Number)
const prices = input[2].split(' ').map(Number)

let totalCost = BigInt(0)
let currentPrice = prices[0]

for (let i = 0; i < distance.length; i++) {
    // 현재 도시에서 다음 도시까지의 거리만큼 현재 가격으로 주유
    totalCost += BigInt(currentPrice) * BigInt(distance[i])
    // 다음 도시의 주유소 가격이 더 저렴하면 가격 갱신
    const nextPrice = prices[i + 1] ? BigInt(prices[i + 1]) : undefined
    if (currentPrice > nextPrice) {
        currentPrice = nextPrice
    }
}

console.log(totalCost.toString().replace('n',''));

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')

const [n, d, k, c] = input.shift().split(' ').map(Number)
const dishes = input.map(Number)
let max = 0
const map = new Map()

// 슬라이딩 윈도우 초기화
for (let i = 0; i < k; i++) {
    map.set(dishes[i], (map.get(dishes[i]) || 0) + 1)
}
map.set(c, (map.get(c) || 0) + 1) // 쿠폰 초밥 추가

max = map.size

// 슬라이딩 윈도우 이동
for (let i = 1; i < n; i++) {
    const prevIndex = (i - 1) % n
    const newIndex = (i + k - 1) % n

    // 이전 초밥 제거
    if (map.get(dishes[prevIndex]) === 1) {
        map.delete(dishes[prevIndex])
    } else {
        map.set(dishes[prevIndex], map.get(dishes[prevIndex]) - 1)
    }
    // 새로운 초밥 추가
    map.set(dishes[newIndex], (map.get(dishes[newIndex]) || 0) + 1)

    // 최대 초밥 종류 수 갱신
    max = Math.max(max, map.size)
}

console.log(max)

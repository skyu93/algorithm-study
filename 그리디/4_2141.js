const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 첫 번째 줄은 마을의 수 제거
input.shift()

// 마을의 위치와 인구 수를 정렬
const villages = input
    .map(line => line.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0])
// 총 인구 수를 계산
let totalPopulation = 0;
for (const village of villages) {
    totalPopulation += village[1];
}

// 누적 인구 수를 저장하는 변수
let cumulativePopulation = 0;
let result = 0;

// ** 누적 인구 수가 총 인구 수의 절반 이상이 되는 지점을 찾음
for (const village of villages) {
    cumulativePopulation += village[1];
    if (cumulativePopulation >= totalPopulation / 2) {
        result = village[0];
        break;
    }
}

// 최적의 우체국 위치 출력
console.log(result);

const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')


let [N, M] = input[0].split(' ')
N = Number(N) // 포겟몬 개수
M = Number(M) // 문제 개수

const dictionary = new Map()
const pokemonList = []

// 포켓몬 도감 만들기
for(let i = 1; i <= N; i++) {
    dictionary.set(input[i], i) // 이름 접근용
    pokemonList.push(input[i])  // 인덱스 접근용
}

for(let i = 1; i <= M; i++) {
    const value = input[i + N]

    if(dictionary.has(value)) {
        console.log(dictionary.get(value))
    }else {
        console.log(pokemonList[Number(value) - 1])
    }
}

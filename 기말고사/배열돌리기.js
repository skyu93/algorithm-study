const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
const count = Number(input.shift())

const rotateMatrixRight = (list, N, angle) => {
    if(angle === 360) return
    const idx = Math.trunc(N/2)
    const lastIdx = N - 1
    for(let k = 0; k < angle / 45; k++) {
        const copy = list.map(l => [...l])
        // 대각선
        for(let i = 0; i < N; i++) {
            list[i][idx] = copy[i][i]
            list[idx][lastIdx - i] = copy[i][lastIdx - i]
        }
        // 가로세로
        for(let i = 0; i < N; i++) {
            list[i][i] = copy[idx][i] // 가로
            list[i][lastIdx - i] = copy[i][idx] // 세로
        }
    }
}

const rotateMatrixLeft = (list, N, angle) => {
    if(angle === 360) return
    const idx = Math.trunc(N/2)
    const lastIdx = N - 1
    for(let k = 0; k < angle / 45; k++) {
        const copy = list.map(l => [...l])
        for(let i = 0; i < N; i++) {
            list[idx][i] = copy[i][i] //
            list[i][idx] = copy[i][lastIdx-i]
        }
        // 가로세로
        for(let i = 0; i < N; i++) {
            list[lastIdx - i][i] = copy[idx][i] // 가로
            list[i][i] = copy[i][idx] // 세로
        }
    }
}
let index = 0
let answer = ''
for(let i = 0; i < count; i++) {
    const [N, angle] = input[index + i].split(' ').map(Number)
    const list = []
    const start = index + i
    for(let j = start + 1; j <= start + N; j++){
        list.push(input[j].split(' '))
    }
    if(angle > 0) {
        // 시계 방향
        rotateMatrixRight(list, N, angle)
    }else {
        rotateMatrixLeft(list, N, angle * -1)
    }
    list.forEach(l => {
        answer += l.join(' ') + '\n'
    })
    index += N
}

console.log(answer)

const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

for(let i = 1; i < input.length; i += 2){
    // M: Queue에서 몇 번째에 놓여 있는지를 나타내는 정수
    const M = Number(input[i].split(' ')[1]) // 종료 조건
    const printQueue = input[i+1]
        .split(' ')
        .map((n, i) => [i, Number(n)]) //[인덱스, 우선순위]

    // 최대 우선순위값을 산출
    let max = Math.max(...printQueue.map(([_,p]) => p))
    let printCount = 0

    while (printQueue.length > 0){
        const [idx, p] = printQueue[0] // 큐의 가장 앞부분 확인
        if(max <= p) {
            // 출력 가능
            printQueue.shift()
            printCount += 1
            if(M === idx) {
                console.log(printCount)
                break
            }
            max = Math.max(...printQueue.map(([_,p]) => p))
        } else{
            // 큐의 가장 뒤로 보내기
            printQueue.push(printQueue.shift())
        }
    }
}

const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')


let [startTime , endTime, streamingEndTime] = input.shift().split(' ')
startTime = Number(startTime.replace(':', ''))
endTime = Number(endTime.replace(':', ''))
streamingEndTime = Number(streamingEndTime.replace(':', ''))

const nickNames = new Map()
input.forEach(chat => {
    let [time, name] = chat.split(' ')
    time = Number(time.replace(':', ''))
    if(startTime >= time){
        // 입장 여부 확인
        nickNames.set(name, true)
    }else if(nickNames.has(name) && endTime <= time && streamingEndTime >= time) {
        // 퇴장 확인
        nickNames.set(name, false)
    }
})

console.log(
    Array
        .from(nickNames.values())
        .filter(v => !v)
        .length
)

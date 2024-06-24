const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const girlGroup = new Map() // 팀명 그룹들
const members = new Map() // 이름 팀명
let index = 0
for(let i = 0; i < N; i++) {
    const team = input[index]
    const memberCount = Number(input[index + 1])
    for(let i = index + 2; i < index + 2 + memberCount; i++) {
        const member = input[i]
        members.set(member, team)
        girlGroup.set(team, [...(girlGroup.get(team) ?? []), member])
    }
    girlGroup.set(team, girlGroup.get(team).sort())
    index += memberCount + 2
}

for(let i = 0; i < M; i++) {
    const nameOrTeam = input[index]
    const type = input[index + 1]
    if(type === '1') {
        // 퀴즈 1인 멤서의 속한팀
        console.log(members.get(nameOrTeam))
    }else {
        // 퀴즈 0이면 사전순
        const members = girlGroup.get(nameOrTeam)
        members.forEach(name => console.log(name))
    }
    index += 2
}



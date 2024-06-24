function solution(n, k) {
    let count = 0
    n.toString(k)
        .split(/0+/g)
        .forEach(s => {
            const num = Number(s)
            if(isPrime(num)) {
                count++
            }
    })
  return count
}
const isPrime = (num) => {
    if(num < 2) return false
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) { // 나눠지면 소수가 아님
            return false
        }
    }
    return true
}
console.log(solution(437674, 3))
console.log(solution(110011, 10))

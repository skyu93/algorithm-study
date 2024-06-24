function solution(n, k) {
    const test = n.toString(k)
    parseInt('211', 3)
  return test
}
const isPrime = (num) => {
    if(num === 1 || num === 2) return true
    for(let i = 3; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false
    }
    return true
}
console.log('teo', parseInt('211', 3))
console.log('teo', isPrime(17))
console.log(solution(437674, 3))

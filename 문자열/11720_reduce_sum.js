const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const answer = (nums) => {
    const sum = (a, b) => a + b;
    return nums.map(n => Number(n)).reduce(sum, 0);
};
console.log(answer([...input[1]]));


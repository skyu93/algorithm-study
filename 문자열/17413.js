const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');
const answer = (str) => {
    let result = ''
    let word = []
    let inTag = false
    for (let i = 0; i < str.length; i++) {
       const s = str[i]
        if(s === '<') {
            if(word.length > 0) {
                result += word.reverse().join('')
                word = []
            }
            inTag = true
            result += s
        } else if(s === '>') {
            inTag = false
            result += s
        } else if(s === ' '){
            if(word.length > 0) {
                result += word.reverse().join('')
                word = []
            }
            result += s
        } else {
            if(inTag) {
                result += s
            }else {
                word.push(s)
            }

        }
    }
    if(word.length > 0) {
        result += word.reverse().join('')
    }
    return result
};
console.log(answer(input[2]));

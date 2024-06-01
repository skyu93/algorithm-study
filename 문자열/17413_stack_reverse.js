const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');
const answer = (str) => {
    let result = ''
    let word = []
    let inTag = false

    const addReversedWordToResult = () => {
        if (word.length > 0) {
            result += word.reverse().join('');
            word = [];
        }
    };

    for (let i = 0; i < str.length; i++) {
       const s = str[i]
        if(s === '<') {
            inTag = true
            addReversedWordToResult()
            result += s
        } else if(s === '>') {
            inTag = false
            result += s
        } else if(s === ' '){
            addReversedWordToResult()
            result += s
        } else {
            if(inTag) {
                result += s
            }else {
                word.push(s)
            }
        }
    }
    addReversedWordToResult()
    return result
};

// const answer = (str) => {
//     let result = ''
//     let stack = []
//     let inTag = false
//
//     const addReversedWordToResult = () => {
//         while (stack.length > 0) {
//             result += stack.pop()
//         }
//     };
//
//     for (let i = 0; i < str.length; i++) {
//         const s = str[i]
//         if(s === '<') {
//             inTag = true
//             addReversedWordToResult()
//             result += s
//         } else if(s === '>') {
//             inTag = false
//             result += s
//         } else if(s === ' '){
//             addReversedWordToResult()
//             result += s
//         } else {
//             if(inTag) {
//                 result += s
//             }else {
//                 stack.push(s)
//             }
//         }
//     }
//     addReversedWordToResult()
//     return result
// };
console.log(answer(input[2]));

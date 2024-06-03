const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');

/*
* snake_case
* /^[a-z]+(_[a-z]+)*$/
* ^: 문자열 처음부터 비교
* [a-z]+: 소문자 앞파벳 a~z까지 문자중 1개 이상 존재 해야함
* (_[a-z]+)*: 그룹화(괄호)하여 _[a-z]+ 패턴을 0개 이상 있는지 확인
* _[a-z]+: 언더바(_)로 시작하고 바로뒤 소문자가 1개 이상 있는지 확인
* $: 문자열 마지막까지 비교
* */
const isSnakeCase = (str) => /^[a-z]+(_[a-z]+)*$/.test(str);
/*
* CamelCase
* /^[a-z]+([A-Z][a-z]*)*$/
* ^: 문자열 처음부터 비교
* [a-z]+: 소문자 앞파벳 a~z까지 문자중 하나가 존재 해야함
* ([A-Z][a-z]*)*: 그룹화(괄호)하여 [A-Z][a-z]* 패턴을 0개 이상 있는지 확인
* [A-Z][a-z]*: 대문자뒤에 소문자가 있는 패턴이 0회 있는지 확인
* $: 문자열 마지막까지 비교
* */
const isCamelCase = (str) => /^[a-z]+([A-Z][a-z]*)*$/.test(str);

const camelToSnake = (str) => {
    return str.replace(/[A-Z]/g, s => `_${s.toLowerCase()}`);
}
// /_[a-z]/ /_([a-z])/ 차이는 콜백 함수의 매개변수에서 차이가 생긴다
// /_[a-z]/ : 매개변수 1개로 _소문자 문자열이 한번에 들어온다.
const snakeToCamel = (str) => {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
const changeVariableName = (fileName) => {
    if (isCamelCase(fileName)) {
        return camelToSnake(fileName);
    }
    else if (isSnakeCase(fileName)) {
        return snakeToCamel(fileName);
    }

    return 'Error!'
}

// for(let i = 0; i < input.length-1; i++) {
//     console.log(changeVariableName(input[i]))
// }

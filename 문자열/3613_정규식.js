const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');

const isSnakeCase = (str) => /^[a-z]+(_[a-z]+)*$/.test(str);
const isCamelCase = (str) => /^[a-z]+([A-Z][a-z]*)*$/.test(str);
const camelToSnake = (str) => {
    return str.replace(/([A-Z])/g, s => `_${s.toLowerCase()}`);
}
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

for(let i = 0; i < input.length-1; i++) {
    console.log(changeVariableName(input[i]))
}

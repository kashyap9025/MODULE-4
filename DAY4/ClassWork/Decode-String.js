function decodeString(s) {
    let stack = [];
    let currentNum = 0;
    let currentStr = '';

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push(currentStr);
            stack.push(currentNum);
            currentStr = '';
            currentNum = 0;
        } else if (char === ']') {
            let num = stack.pop();
            let prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            currentStr += char;
        }
    }

    return currentStr;
}

// Example 1:
let s1 = "3[a]2[bc]";
console.log(decodeString(s1));

// Example 2:
let s2 = "3[o2[c]]";
console.log(decodeString(s2));

// Example 3:
let s3 = "2[kjd]3[bm]ef";
console.log(decodeString(s3)); 
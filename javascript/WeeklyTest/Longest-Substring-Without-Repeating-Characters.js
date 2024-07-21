const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lengthOfLongestSubstring(s) {
    let map = new Map();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

rl.question('Enter a string to find the length of the longest substring without repeating characters: ', (inputString) => {
    const result = lengthOfLongestSubstring(inputString);
    console.log('Length of the longest substring without repeating characters:', result);
    rl.close();
});
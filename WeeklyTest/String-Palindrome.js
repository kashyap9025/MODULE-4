const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

rl.question('Enter a string to check if it is a palindrome: ', (inputString) => {
    if (isPalindrome(inputString)) {
        console.log('The string is a palindrome.');
    } else {
        console.log('The string is not a palindrome.');
    }
    rl.close();
});
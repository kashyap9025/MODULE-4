const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = {};

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char] -= 1;
    }

    for (let count in charCount) {
        if (charCount[count] !== 0) {
            return false;
        }
    }

    return true;
}

rl.question('Enter the first string: ', (str1) => {
    rl.question('Enter the second string: ', (str2) => {
        if (areAnagrams(str1, str2)) {
            console.log('The strings are anagrams.');
        } else {
            console.log('The strings are not anagrams.');
        }
        rl.close();
    });
});
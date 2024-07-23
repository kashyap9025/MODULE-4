const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function compressString(str) {
    if (str.length === 0) return '';

    let compressed = '';
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            compressed += str[i - 1] + count;
            count = 1;
        }
    }

    compressed += str[str.length - 1] + count;

    return compressed.length < str.length ? compressed : str;
}

rl.question('Enter a string to compress: ', (inputString) => {
    const compressedString = compressString(inputString);
    console.log('Compressed string:', compressedString);
    rl.close();
});
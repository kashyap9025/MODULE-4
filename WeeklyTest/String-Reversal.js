const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(inputString) {
    let reversed = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed += inputString[i];
    }
    return reversed;
}

rl.question('Enter a string to reverse: ', (inputString) => {
    const reversedString = reverseString(inputString);
    console.log('Reversed string: ' + reversedString);
    rl.close();
});
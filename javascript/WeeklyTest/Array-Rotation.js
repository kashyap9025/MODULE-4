const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

function parseArrayInput(input) {
    return input.split(',').map(Number).filter(n => !isNaN(n));
}

rl.question('Enter the array (comma-separated values): ', (inputArray) => {
    rl.question('Enter the number of positions to rotate: ', (inputK) => {
        const array = parseArrayInput(inputArray);
        const k = parseInt(inputK, 10);

        if (isNaN(k)) {
            console.log('Invalid number of positions.');
            rl.close();
            return;
        }

        const rotatedArray = rotateArray(array, k);
        console.log('Rotated array:', rotatedArray);

        rl.close();
    });
});
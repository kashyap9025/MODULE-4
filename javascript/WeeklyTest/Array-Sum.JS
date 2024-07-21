const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findPairs(arr, target) {
    const pairs = [];
    const seen = new Set();

    for (const num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

function parseArrayInput(input) {
    return input.split(',').map(Number).filter(n => !isNaN(n));
}

rl.question('Enter the array (comma-separated values): ', (inputArray) => {
    rl.question('Enter the target sum: ', (inputTarget) => {
        const array = parseArrayInput(inputArray);
        const target = parseInt(inputTarget, 10);

        if (isNaN(target)) {
            console.log('Invalid target sum.');
            rl.close();
            return;
        }

        const pairs = findPairs(array, target);
        if (pairs.length > 0) {
            console.log('Pairs that add up to the target sum:', pairs);
        } else {
            console.log('No pairs found that add up to the target sum.');
        }

        rl.close();
    });
});
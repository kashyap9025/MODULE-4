const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [];

    set1.forEach(item => {
        if (set2.has(item)) {
            intersection.push(item);
        }
    });

    return intersection;
}

function parseArrayInput(input) {
    return input.split(',').map(Number).filter(n => !isNaN(n));
}

rl.question('Enter the first array (comma-separated values): ', (input1) => {
    rl.question('Enter the second array (comma-separated values): ', (input2) => {
        const arr1 = parseArrayInput(input1);
        const arr2 = parseArrayInput(input2);

        const intersection = findIntersection(arr1, arr2);
        console.log('Intersection of the two arrays:', intersection);

        rl.close();
    });
});
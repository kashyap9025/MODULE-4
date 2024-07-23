const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Press a number : `, row => {
    row = parseInt(row);
    let space = row * 2 - 2;

    // Top half of the pattern including the middle line
    for (let i = 1; i <= row; i++) {
        let str = "";

        // Print leading spaces
        for (let j = 0; j < space; j++) {
            str += ' ';
        }

        // Print numbers
        for (let k = i; k >= 1; k--) {
            str += k + ' ';
        }

        console.log(str.trim());
        space -= 2;
    }

    // Bottom half of the pattern excluding the middle line
    space_sec = 2;
    for (let i = row - 1; i >= 1; i--) {
        let str = "";

        // Print leading spaces
        for (let j = 0; j < space_sec; j++) {
            str += ' ';
        }

        // Print numbers
        for (let k = i; k >= 1; k--) {
            str += k + ' ';
        }

        console.log(str.trim());
        space_sec += 2;
    }

    readline.close();
});
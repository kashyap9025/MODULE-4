const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Press a number: `, row => {
    row = parseInt(row);
    let space = 0;
    let maxNum = row * 2 - 1;

    for (let i = 0; i < row; i++) {
        let str = "";
        for (let j = 0; j < space; j++) {
            str += ' ';
        }
        for (let k = 1; k <= maxNum - 2 * i; k++) {
            str += k + ' ';
        }

        space += 2;
        console.log(str);
    }
    
    readline.close();
});
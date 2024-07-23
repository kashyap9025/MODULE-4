const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Press a number : `, row => {
    row = parseInt(row);
    let space = row * 2 - 2;
    for (let i = 1; i <= row; i++) {
        let str = "";
        for (let j = 1; j < space; j++) {
            str += ' ';
        }
        for (let k = 1; k < 2 * i; k++) {
            str += k + ' ';
        }

        console.log(str);
        space -= 2;
    }
    readline.close()
});
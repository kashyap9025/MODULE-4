// Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
    a: 0,
    b: 0,

    read() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Enter value for a: ', (inputA) => {
            this.a = parseFloat(inputA);
            rl.question('Enter value for b: ', (inputB) => {
                this.b = parseFloat(inputB);
                rl.close();

                console.log('Sum: ', this.sum());
                console.log('Product: ', this.mul());
            });
        });
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
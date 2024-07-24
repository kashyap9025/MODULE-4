// We have an object storing salaries of our team:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.


let teamReward = {
    Aashish: 281,
    Kashyap: 286,
    Tejas: 282,
    Ash: 287,
};

let sum = 0;

for (let score in teamReward) {
    if (teamReward.hasOwnProperty(score)) {
        sum += teamReward[score];
    }
}

console.log("Team_reward total score 'out of 1200' : " + sum + "!");
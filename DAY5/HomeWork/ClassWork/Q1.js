// 1. Create an empty object user.
//let objuser = {}; //Output: {}

// 2. Add the property name with the value John.
//objuser.name = "John"; //Output: { name: 'John' }

// 3. Add the property surname with the value Smith.
// objuser.surname = 'Smith'; //Output: { name: 'John', surname: 'Smith' }


// 4. Change the value of the name to Pete.
//objuser.name = "Pete"; //Output: { name: 'Pete', surname: 'Smith' }

// 5. Remove the property name from the object.
// delete objuser.name; //Output: { surname: 'Smith' }


// Final:
// console.log(objuser); //Output: { surname: 'Smith' }

// Actual code
let userdetail = {}
userdetail.name = "John";
userdetail.surname = "Smith";
userdetail.name = "Pete";
delete userdetail.name;
console.log(userdetail);
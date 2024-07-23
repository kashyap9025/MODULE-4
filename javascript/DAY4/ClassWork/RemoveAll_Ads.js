function removeDuplicates(s) {
    let stack = [];
    
    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
}

let s1 = "abbarremmca";
console.log( "Adjacent duplicates: " + removeDuplicates(s1)); 

let s2 = "azxxzykorr";
console.log( "Adjacent duplicates: " + removeDuplicates(s2)); 
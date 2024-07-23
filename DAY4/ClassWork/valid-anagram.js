function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
}

// Example 1:
let s1 = "anagram";
let t1 = "nagaram";
console.log(isAnagram(s1, t1));

// Example 2:
let s2 = "rat";
let t2 = "car";
console.log(isAnagram(s2, t2)); 
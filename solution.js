function maximumGain(s, x, y) {
    function removeSubstring(s, sub1, points1, sub2, points2) {
        let stack = [];
        let score = 0;

        // First pass: Remove all occurrences of sub1
        for (let char of s) {
            if (stack.length && stack[stack.length - 1] === sub1[0] && char === sub1[1]) {
                stack.pop(); // Remove the top character of the stack
                score += points1; // Add points for removing sub1
            } else {
                stack.push(char); // Push current character onto the stack
            }
        }

        // The string after removing all occurrences of sub1
        let intermediateString = stack.join('');
        stack = []; // Reset the stack

        // Second pass: Remove all occurrences of sub2
        for (let char of intermediateString) {
            if (stack.length && stack[stack.length - 1] === sub2[0] && char === sub2[1]) {
                stack.pop(); // Remove the top character of the stack
                score += points2; // Add points for removing sub2
            } else {
                stack.push(char); // Push current character onto the stack
            }
        }

        return score;
    }

    if (x >= y) {
        return removeSubstring(s, "ab", x, "ba", y);
    } else {
        return removeSubstring(s, "ba", y, "ab", x);
    }
}

// Example 1
let s1 = "cdbcbbaaabab";
let x1 = 4;
let y1 = 5;
console.log(maximumGain(s1, x1, y1));  // Output: 19

// Example 2
let s2 = "aabbaaxybbaabb";
let x2 = 5;
let y2 = 4;
console.log(maximumGain(s2, x2, y2));  // Output: 20

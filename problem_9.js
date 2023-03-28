// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

// Example

// The string contains all letters in the English alphabet, so return pangram.

// Function Description

// Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

// pangrams has the following parameter(s):

// string s: a string to test
// Returns

// string: either pangram or not pangram

function pangrams(s) {
    // Create an array to store the frequency of each character
    const charFreq = new Array(26).fill(0);
    
    // Iterate through each character of the string
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        // If the character is a letter, update its frequency
        if (charCode >= 65 && charCode <= 90) {
            charFreq[charCode - 65]++;
        } else if (charCode >= 97 && charCode <= 122) {
            charFreq[charCode - 97]++;
        }
    }
    
    // Check if any letter has a frequency of zero
    for (let i = 0; i < charFreq.length; i++) {
        if (charFreq[i] === 0) {
            return "not pangram";
        }
    }
    
    return "pangram";
}

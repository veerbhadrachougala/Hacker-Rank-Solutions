// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

function lonelyinteger(a) {
    let result = 0; //initialize a variable to store the result

    for (let i = 0; i < a.length; i++) { // loop through each element in the array
        result = result ^ a[i]; // bitwise XOR operation to find the unique element
    }

    return result; // return the unique element
}
lonelyinteger([15,12,12,13,14,13,14]);

// -----------------------------------

function lonelyint(a) {
    let map = {};
    for (let i = 0; i < a.length; i++) {
        if (a[i] in map) {
            map[a[i]]++;
        } else {
            map[a[i]] = 1;
        }
    }
    for (let key in map) {
        if (map[key] === 1) {
            return parseInt(key);
        }
    }
}
lonelyint([15,12,12,13,14,13,14])
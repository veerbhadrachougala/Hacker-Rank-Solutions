
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers


function diagonalDifference(arr) {
    let n = arr.length;
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let i = 0; i < n; i++) {
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][n - 1 - i];
    }
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}
diagonalDifference(arr)
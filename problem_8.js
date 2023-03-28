// The counting sort is a sorting algorithm that does not require comparison between the elements to sort a list. Instead, it creates an auxiliary array, called the frequency array, with indices covering the range of values in the original array. Then, it iterates through the original array and increments the corresponding frequency value in the frequency array each time it encounters an element. Finally, it iterates through the frequency array and generates the sorted array by adding each index a number of times equal to the corresponding frequency value.

// In the provided example, the input array contains 100 integers in the range [1, 99]. To perform counting sort on this array, we first create an empty frequency array of size 100, with all elements initialized to 0. Then, we iterate through the input array and update the frequency array as follows:

// When we encounter the value 1, we increment the frequency value at index 0 to 1.
// When we encounter the value 2, we increment the frequency value at index 1 to 1.
// When we encounter the value 3, we increment the frequency value at index 2 to 1.
// When we encounter the value 4, we increment the frequency value at index 3 to 1.
// When we encounter the value 5, we increment the frequency value at index 4 to 1.
// ...
// When we encounter the value 63, we increment the frequency value at index 62 to 1.
// When we encounter the value 67, we increment the frequency value at index 66 to 1.
// When we encounter the value 68, we increment the frequency value at index 67 to 1.
// When we encounter the value 69, we increment the frequency value at index 68 to 1.
// When we encounter the value 70, we increment the frequency value at index 69 to 1.
// ...
// When we encounter the value 99, we increment the frequency value at index 98 to 1.
// After completing this iteration, the frequency array contains the number of occurrences of each value in the original array. For example, the frequency value at index 0 is 2, indicating that the value 1 appeared twice in the original array. Similarly, the frequency value at index 1 is 2, indicating that the value 2 appeared twice in the original array.

// To generate the sorted array, we can iterate through the frequency array and add each index a number of times equal to the corresponding frequency value. For example, since the frequency value at index 0 is 2, we add the value 1 to the sorted array twice. Similarly, since the frequency value at index 1 is 2, we add the value 2 to the sorted array twice. We repeat this process for all indices in the frequency array, generating the sorted array [1, 1, 2, 3, 3, 6, 8, 9, 9, 10, 12, 13, 16, 16, 18, 20, 21, 21, 22, 23, 24, 25, 25, 25, 27, 27, 30, 30, 32, 32, 32, 33, 33, 33, 34, 39, 39, 40, 40, 41, 42, 43, 44, 44, 46, 46, 48, 50, 53, 56, 56, 57, 59, 60, 61, 63, 65, 67, 67, 68, 69, 69

function countingSort(arr) {
    // Create a frequency array with 100 elements, initialized to 0
    const freqArray = new Array(100).fill(0);
  
    // Increment the count for each value in the input array
    for (let i = 0; i < arr.length; i++) {
      freqArray[arr[i]]++;
    }
  
    return freqArray;
}
const inputArray = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33];

const frequencyArray = countingSort(inputArray);

console.log(frequencyArray);
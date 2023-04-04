let arr = [1,5,3,4,2,6,8,15,20];

function findMedian(arr) {
    // sort the array
    arr.sort((a, b) => a - b);
    
    // calculate the middle index
    const midIndex = Math.floor(arr.length / 2);
    
    // return the median element
    return arr[midIndex];
  }

//   --------------------------------------------------

function findMedian(arr){
     for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
    arr.join("");
    console.log(arr);                  //[1, 2, 3, 4, 5, 6, 8, 15, 20]
    let num = parseInt(arr.length/2);

    // To get the middle index number of array
    console.log(num);                  // 4

    return arr[num];                   // 5
}
findMedian(arr);

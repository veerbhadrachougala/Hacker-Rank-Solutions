// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example


// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs

let n = 7;
let ar = [1,2,1,2,1,3,2];
function sockMerchant(n, ar) {
    let pairs = 0;
    let socks = {};

    for(let i=0; i<n; i++){
        let color = ar[i];
        if(socks[color]){
            pairs++;
            socks[color] = 0;
        }else{
            socks[color] = 1;
        }
    }
    return pairs;
}
sockMerchant(n, ar);

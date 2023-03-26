// You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer.

// Example

// Explanation

// Take 1 for example, as unsigned 32-bits is 00000000000000000000000000000001 and doing the flipping we get 11111111111111111111111111111110 which in turn is 4294967294.
 
// ------------------------

// input 1 = 00000000000000000000000000000001
//     change 0 ==> 1 & 1 ==> 0
//     00000000000000000000000000000001 == 11111111111111111111111111111110 == output = 4294967294

function flippingBits(n) {
    // Convert the number to a 32-bit binary string
    const binary = n.toString(2).padStart(32, '0');
    
    // Flip each bit in the binary string
    let flipped = '';
    for (let i = 0; i < binary.length; i++) {
      flipped += binary[i] === '0' ? '1' : '0';
    }
    
    // Convert the flipped binary string back to an integer
    return parseInt(flipped, 2);
  }
  const result = flippingBits(2147483647); // Returns 2147483648
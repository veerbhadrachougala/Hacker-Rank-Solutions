
 
// given input s = 10:30:54 AM
//    hh:mm:ss               hh:mm:ss
// if 12:01:00PM then return 12:01:00
// if 07:54:10PM then return 12+07:54:10 = 19:54:10

//    hh:mm:ss               hh:mm:ss
// if 07:54:10AM then return 07:54:10
// if 12:01:00AM then return 12-12:01:00AM = 00:01:00

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

function timeConversion(s) {
    // Extract the hour, minute, and second values from the input string
    let [hh, mm, ss] = s.slice(0, -2).split(':');
  
    // Determine whether the time is in AM or PM
    let period = s.slice(-2);
  
    // Convert the hour to 24-hour format
    if (hh === '12') {
      hh = '00';
    }
    if (period === 'PM') {
      hh = String(Number(hh) + 12);
    }
  
    // Construct the 24-hour format string and return it
    return `${hh}:${mm}:${ss}`;
  }
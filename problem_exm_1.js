// 1. JavaScript: Strip Property

// In this challenge, the task is to implement a function stripProperty that:

// ⚫ takes 2 arguments: an object literal obj and a string prop.

// ⚫ returns a new object literal with the same properties and their values as obj excluding the property named prop, if it exists.

// Your implementation of the function will be tested by a provided code stub on several input files. Each input file contains parameters for the function call. The function will be called with those parameters, and the result of its execution will be printed to the standard output by the provided code. The provided code prints the properties of the returned object ordered by their names.

function stripProperty(obj, objOroperty) {
    const newObj = {};
  
    for (let key in obj) {
      if (key !== objOroperty) {
        newObj[key] = obj[key];
      }
    }
  
    return newObj;
  }
  let obj = {foo:1,bar:2,baz:3}
  stripProperty(obj, 'bar');
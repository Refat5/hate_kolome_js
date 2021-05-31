// //array declaration
// var arrayName = new Array('refat', 'tanvir', 'komol', 'jubair');
// console.log(arrayName);

// var arrayName = ['refat', 'tanvir', 'komol', 'jubair'];
// console.log(arrayName);

// arrayName[2];
// // array value change

// arrayName[3] = 'fahad';
// console.log(arrayName);

// //array length (dot notation)

// console.log(arrayName.length);
// //array length (bracket notation )
// console.log(arrayName['length']);

// // using loop in array

// for (var i = 0; i < arrayName.length; i++) {
//     console.log('Name: ' + arrayName[i]);
// }
// // add a new items to the end of the array

// var pushArray = arrayName.push('partha');
// console.log(pushArray);
// console.log(arrayName);

// //remove item to the end of the array
// arrayName.pop();
// console.log(arrayName);

// //remove item to the first of the array
// arrayName.shift();
// console.log(arrayName);

// //add a new item to the first of the array
// arrayName.unshift('hello');
// console.log(arrayName);

// // find out array index number

// console.log(arrayName.indexOf('tanvir'));

// //remove array item using index number
// console.log(arrayName.splice(2, 3));

// //array slice
var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var spliceArray = newArray.splice(3);

// console.log(newArray);
// console.log(spliceArray);

// //array copy (copy by reparence)
// var copyArray = newArray;

// console.log(copyArray);

var testArray = ['rahim', 'refat', 'tanvir', 'new'];
var newTest = testArray;
newTest[0] = 'change abdur rahim';
console.log(testArray);
console.log(newTest);

//array copy using slice (copy by value)

var copyArray = newArray.slice(0, 4);
console.log(copyArray);

var testArray = ['rahim', 'refat', 'tanvir', 'new'];
var newTest = testArray.slice();
newTest[0] = 'change abdur rahim';
console.log(testArray);
console.log(newTest);

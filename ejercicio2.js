// Exercise #2 (sugerencia map())
// Write a function that:
// Takes in an array of numbers.
// Doubles the value of each number in the array.
// Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
function doublesNumbersOfArray(arr) {
  let newArrayNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    newArrayNumbers[i] = arr[i] * 2;
  }
  return newArrayNumbers;
}
//con MAP
console.log([3, 8, 9, 6].map((num) => num * 2));
console.log(doublesNumbersOfArray([3, 8, 9, 6]));

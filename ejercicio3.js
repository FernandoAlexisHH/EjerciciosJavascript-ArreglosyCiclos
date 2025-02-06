// Exercise #3 (sugerencia reduce())
// Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
function sumAndProduct(arr) {
  let sum = 0;
  let multiplication = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    multiplication *= arr[i];
  }
  return `The sum is ${sum}. The product is ${multiplication} `;
}
//con REDUCE
console.log(
  `The sum is ${[1, 2, 3, 4].reduce((a, b) => a + b, 0)}. The product is ${[
    1, 2, 3, 4,
  ].reduce((a, b) => a * b, 1)}`
);

console.log(sumAndProduct([1, 2, 3, 4]));

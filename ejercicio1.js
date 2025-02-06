// Exercise #1 (sugerencia: join())
// Copy the code below into your workspace:
// let arr = ["This", "is", "a", "sentence."];
// function printOutString() {
//   // your code here
// }
// printOutString();
// Complete the function to print out the string: This is a sentence.

let arr = ["This", "is", "a", "sentence."];
function printOutString(arr) {
  let cadena = "";
  for (let i = 0; i < arr.length; i++) {
    cadena = cadena + arr[i] + " ";
  }
  return cadena;
}
//Con JOIN
console.log(arr.join(" "));
console.log(printOutString(arr));

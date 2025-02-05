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

// Exercise #4 (sugerencia filter() e includes())
// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];
// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
let student1Courses = ["Math", "English", "Programming", "hola", "Science"];
let student2Courses = ["Geography", "Spanish", "Programming", "Science"];

const commonCourses = (course1, course2) => {
  let equalCourses = [];
  for (let i = 0; i < course1.length; i++) {
    for (let j = 0; j < course2.length; j++) {
      if (course1[i] === course2[j]) equalCourses.push(course1[i]);
    }
  }
  return equalCourses;
};
//Con filter e includes
let commonCoursesArray = student1Courses.filter((course) =>
  student2Courses.includes(course)
);

console.log(commonCoursesArray);
console.log(commonCourses(student1Courses, student2Courses));

// Exercise #5
// For each of the exercises below, assume you are starting with the following people array.
// let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
// Write a command that prints out all of the people in the list.
// Write the command to remove "Dani" from the array.
// Write the command to remove "Juan" from the array.
// Write the command to move "Luis" to the front of the array.
// Write the command to add your name to the end of the array.
// Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
// Write the command that gives the indexOf where "Maria" is located.
// At the end of the exercise, there should be 4 people in the array.
// Inicializar el array
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Imprimir todas las personas en la lista
console.log(people);

// 2. Eliminar "Dani" del array
people.splice(people.indexOf("Dani"), 1);

// 3. Eliminar "Juan" del array
people.splice(people.indexOf("Juan"), 1);

// 4. Mover "Luis" al frente del array
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

// 5. Agregar tu nombre al final del array
people.push("TuNombre");

// 6. Iterar el array y salir después de imprimir "Maria"
for (let person of people) {
  console.log(person);
  if (person === "Maria") break;
}

// 7. Obtener el índice de "Maria"
console.log("El índice de Maria es:", people.indexOf("Maria"));

// Estado final del array
console.log("Estado final del array:", people);

// OPTIONAL: Exercise # 6
// Write a function that performs the bubble algorithm.
// Input [3, 6, 12, 5, 100, 1]
// Output [1, 3, 5, 6, 12, 100]
let arrBubble = [3, 6, 12, 5, 100, 1];
const bubbleAlgorithm = (arr) => {
  let aux;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
};

console.log(bubbleAlgorithm(arrBubble));

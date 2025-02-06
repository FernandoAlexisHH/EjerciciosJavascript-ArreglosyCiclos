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

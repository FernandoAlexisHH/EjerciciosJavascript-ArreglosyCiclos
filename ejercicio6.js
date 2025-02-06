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

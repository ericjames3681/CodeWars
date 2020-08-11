// You have an array of numbers.
// Your task is to sort ascending odd
// numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it.
// If you have an empty array, you need to return it.

// Example
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  let oddArr = [];
  let oddIdx = 0;
  array.forEach((el) => {
    el % 2 != 0 ? oddArr.push(el) : "";
  });
  oddArr.sort((a, b) => a - b);
  console.log(oddArr);
  return array.map((el) => {
    oddArr.includes(el) ? (el = oddArr[oddIdx]) : "";
    oddArr.includes(el) ? oddIdx++ : "";
    return el;
  });
}

console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));

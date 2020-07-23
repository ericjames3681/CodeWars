function countOccurences(arr) {
  let newObj = arr.reduce((acc, el) => {
    el in acc ? acc[el]++ : (acc[el] = 1);
    return acc;
  }, {});
  return newObj;
}

console.log(countOccurences([10, 9, 4, 10, 10, 4]));

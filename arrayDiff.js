function arrayDiff(a, b) {
  return a.filter((el) => !b.includes(el));
}

console.log(arrayDiff([3, 4], [3]));

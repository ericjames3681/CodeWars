function duplicateCount(text) {
  let count = text
    .toLowerCase()
    .split("")
    .reduce((accum, curr) => {
      accum[curr] ? (accum[curr] += 1) : (accum[curr] = 1);
      return accum;
    }, {});
  return count;
}

console.log(duplicateCount("Eric"));

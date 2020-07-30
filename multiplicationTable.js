// Your task, is to create NxN multiplication table,
// of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

function multiplicationTable(size) {
  let table = [];

  for (let i = 1; i <= size; i++) {
    table[i - 1] = [];
    for (let j = 1; j <= size; j++) {
      table[i - 1].push(j * i);
    }
  }
  return table;
}
console.log(multiplicationTable(3));

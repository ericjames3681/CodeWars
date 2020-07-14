function filter_list(l) {
  let newArr = l.filter((listItem) => typeof listItem === "number");
  return newArr;
}
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

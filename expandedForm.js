function expandedForm(num) {
  let arr = num.toString().split("").reverse();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] == 0 ? result.push() : result.push(arr[i] + "0".repeat(i));
  }
  return result.reverse().join(" + ");
}

console.log(expandedForm(5004003));

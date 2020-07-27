// Each exclamation mark weight is 2; Each question mark weight is 3.
// Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; I
// f the right side is more heavy, return "Right";
// If they are balanced, return "Balance".

// Examples
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left, right) {
  let lCount = 0;
  let rCount = 0;
  left = left.split("");

  right = right.split("");
  left.forEach((el) => {
    if (el === "!") {
      lCount += 2;
    } else if (el === "?") {
      lCount += 3;
    }
  });
  right.forEach((el) => {
    if (el === "!") {
      rCount += 2;
    } else if (el === "?") {
      rCount += 3;
    }
  });

  return rCount === lCount ? "Balance" : lCount > rCount ? "Left" : "Right";
}

console.log(balance("!??", "?!!"));

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
  let lCount = left.split("").reduce((s, a) => s + (a === "?" ? 3 : 2), 0);
  let rCount = right.split("").reduce((s, a) => s + (a === "?" ? 3 : 2), 0);

  return rCount === lCount ? "Balance" : lCount > rCount ? "Left" : "Right";
}

console.log(balance("!??", "?!!"));

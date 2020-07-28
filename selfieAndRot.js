// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Clock rotation 180 degrees: rot
// rot(s) => "ponm\nlkji\nhgfe\ndcba"
// selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string
// obtained by clock rotation 180 degrees with dots interspersed in order (hopefully)
// to better show the rotation when printed.
// s = "abcd\nefgh\nijkl\nmnop" -->
// "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
// or printed:
// |rotation        |selfie_and_rot
// |abcd --> ponm   |abcd --> abcd....
// |efgh     lkji   |efgh     efgh....
// |ijkl     hgfe   |ijkl     ijkl....
// |mnop     dcba   |mnop     mnop....
//                            ....ponm
//                            ....lkji
//                            ....hgfe
//                            ....dcba
// #Task:

// Write these two functions rotand selfie_and_rot
// and

// high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s
// (fct will be one of rot, selfie_and_rot)
// #Examples:

// s = "abcd\nefgh\nijkl\nmnop"
// oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
// oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....
// ponm\n....lkji\n....hgfe\n....dcba"

function rot(strng) {
  return strng.split("").reverse().join("");
}
function selfieAndRot(strng) {
  // your code
  return (
    (strng = strng
      .split("\n")
      .map((strng) => strng + ".".repeat(strng.length) + "\n")
      .join("")),
    (strng + rot(strng)).replace("\n\n", "\n")
  );
}
function oper(fct, s) {
  fct(s);
}

console.log(rot("fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL"));

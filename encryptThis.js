// Encrypt this!

// You want to create secret messages which can be
// deciphered by the Decipher this! kata.
// Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
  let result = [];
  text.split(" ").forEach((el) => {
    let num = el.charCodeAt(0).toString();
    let word = el.split("");
    word[0] = num;
    let last = word[word.length - 1];
    word[word.length - 1] = word[1];
    word[1] = last;
    result.push(word.join(""));
  });

  return result.join(" ");
};

console.log(encryptThis("A wise old owl lived in an oak"));

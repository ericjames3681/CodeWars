// You need to write regex that will validate a password to make sure
// it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([A-Za-z0-9]){6,}$/;
  return re.test(password);
}
console.log(validate("pasaaw7aS"));

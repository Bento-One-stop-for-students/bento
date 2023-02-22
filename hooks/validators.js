export function checkValidInputs() {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] === "") {
      return false;
    }
  }
  return true;
}

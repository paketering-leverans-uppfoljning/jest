function concatenate(a, b) {
  if ((typeof a === "string") | (typeof b === "string")) {
    throw new Error("Input of type string");
  }
  return a + b;
}

module.exports = concatenate;

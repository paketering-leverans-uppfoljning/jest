function greet(name) {
  if (typeof name === "number") {
    throw new Error("Input of type number");
  }
  return `Hello, ${name}!`;
}

module.exports = greet;

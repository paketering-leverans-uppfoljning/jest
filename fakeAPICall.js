async function fakeAPICall(userId) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: userId, name: "Alice" }), 1000)
  );
}
module.exports = fakeAPICall

//fakeAPICall(3) => {id: 3, name: "Alice"}
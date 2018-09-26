function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

function getRandomMathOperator() {
  const operators = ["+", "*", "-", "/"];
  return getRandomInt(4);
}
// todo: avoid to get an number more than one time.
export function countingTo10() {
  const operation = {};
  operation.a = getRandomInt(10);
  operation.b = getRandomInt(10);
  operation.answers = shuffleArrayOf3items([
    getRandomInt(10),
    operation.a + operation.b,
    getRandomInt(10)
  ]);
  return operation;
}
// TODO: find a better shuffle algorithme.
function shuffleArrayOf3items(array) {
  // array [1, 2, 3] => [2, 1, 3] => [1, 3, 2]
  const i = getRandomInt(3);
  if (i === 0) {
    return array;
  }
  if (i === 1) {
    return Array.of(array[1], array[0], array[2]);
  }

  return Array.of(array[0], array[2], array[1]);
}

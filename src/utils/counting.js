function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

function getRandomMathOperator() {
  const operators = ["+", "*", "-", "/"];
  return getRandomInt(4);
}
// todo: avoid to get an number more than one time.
export function countingToN(n = 10) {
  const operation = {};
  operation.a = getRandomInt(n);
  operation.b = getRandomInt(n);
  const answers = [];

  const rigthAnswer = operation.a + operation.b;
  answers.push(rigthAnswer);
  let wrongAnswer1 = getRandomInt(rigthAnswer);
  while (answers.includes(wrongAnswer1)) {
    wrongAnswer1 = getRandomInt(rigthAnswer + 5);
  }

  answers.push(wrongAnswer1);
  let wrongAnswer2 = getRandomInt(rigthAnswer + 5);
  while (answers.includes(wrongAnswer2)) {
    wrongAnswer2 = getRandomInt(rigthAnswer + 5);
  }
  answers.push(wrongAnswer2);
  operation.answers = shuffleArrayOf3items(answers);
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

  return Array.of(array[1], array[2], array[0]);
}

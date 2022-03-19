function addNumber() {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum = sum + num;
  }
  return sum;
}

var result = addNumber(22, 22, 22, 100, 200);
console.log(result);

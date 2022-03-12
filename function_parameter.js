function double(num) {
  var result = num * 2;
  console.log(result);
}

double(50);
double(500);

// another example

function number(num1) {
  var result1 = num1 * 2;
  return result1;
}

var first = number(5);
var second = number(10);
var total = first + second;
console.log(total);

// another example
function add(num2, num3) {
  var result = num2 + num3;
  return result;
}
var sum = add(15, 20);
console.log(sum);

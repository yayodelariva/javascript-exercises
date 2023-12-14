const add = function (numA, numB, total) {
  return total = numA + numB;
};

const subtract = function (numA, numB, total) {
  return total = numA - numB;

};

const sum = function (array) {
 return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
 

};

const multiply = function (array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1)

};

const power = function (numA, powerNum) {
return Math.pow(numA,powerNum);

};

const factorial = function (baseNum) {
  let accumulator = 1
  for (let i = baseNum; i > 0; i--){
    accumulator = accumulator * i
  }
return accumulator
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

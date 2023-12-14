const convertToCelsius = function(temp) {
  let newTemp = 0
  newTemp = 5/9*(temp-32)
  let rounded = Math.round(newTemp * 10) / 10
  return rounded;
};

const convertToFahrenheit = function(temp) {
  let newTemp = 0
  newTemp = 9/5*temp+32;
  let rounded = Math.round(newTemp * 10) / 10
  return rounded;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const leapYears = function(Num) {
    numDividedByFour = Num/4
    numDividedByHundred = Num/100
    numDividedByFourHundred = Num/400

    if (Number.isInteger(numDividedByFour) && !Number.isInteger(numDividedByHundred)){
        return Num % 4 === 0 || Num % 100 === 0;
    }else if (Number.isInteger(numDividedByHundred) && Number.isInteger(numDividedByFourHundred)){
        return Num % 100 === 0 || Num % 400 === 0;
      }else{
        return !!false
      }
};

// Do not edit below this line
module.exports = leapYears;

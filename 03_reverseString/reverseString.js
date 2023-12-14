const reverseString = function(str) {
    let stringSplit = str.split("");
    
    let reverseStr = stringSplit.reverse();
    let joinString = reverseStr.join("");

    return joinString;


};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (word) {
  let processedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedWord.split('').reverse().join("") == processedWord
};

// Do not edit below this line
module.exports = palindromes;

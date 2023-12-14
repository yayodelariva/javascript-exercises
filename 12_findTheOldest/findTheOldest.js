const findTheOldest = function(a,b) {
   let ageA = a.yearOfDeath - a.yearOfBirth;
   let ageB = b.yearOfDeath - b.yearOfBirth;
   if(ageA > ageB){
    return 1
   } else {
    return -1
   }

};

// Do not edit below this line
module.exports = findTheOldest;


    const repeatString = function(string, num){
        if(num<0) return "ERROR";
        
        let word = "";
        while (num > 0){
            word= word+string;
            num--;
            
        }
        
        return word;
        
            
    }

// Do not edit below this line
module.exports = repeatString;

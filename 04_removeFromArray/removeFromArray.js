const removeFromArray = function(userArray, ...args) {
    let newArray = [];
    userArray.forEach((item)=>{
        if(!args.includes(item)){
            newArray.push(item);
        }
        
    
    })
    return newArray;
    }




// Do not edit below this line
module.exports = removeFromArray;

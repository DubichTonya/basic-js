const CustomError = require("../extensions/custom-error");
let newArray = [];
if (Array.isArray(arr)) {

  newArray = arr.slice()

  for(let i = 0; i < newArray.length; i++ ){
    
    if(newArray[i] === '--discard-prev'){
      if(i === 0) {
        break;
      }
      newArray.splice(i - 1, 1)
    } else if (newArray[i] === '--discard-next'){
      newArray.splice(i + 1, 1)
    } else if (newArray[i] === '--double-prev'){
      newArray.splice(i, 1, newArray[i - 1])
    } else if (newArray[i] === '--double-next'){
      newArray.splice(i, 1, newArray[i + 1])
    } 
  }
  
  newArray = newArray.filter(item => (item !== '--discard-prev' && item !== '--discard-next' && item !== '--double-prev'&& item !== '--double-next'&& item != null && item !== undefined)) 
  return newArray;
} else {
  throw new Error;
};

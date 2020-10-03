const CustomError = require("../extensions/custom-error");

function isTurn(disksNumber){
  if(disksNumber === 1) {
    return disksNumber;
  } else if(disksNumber > 1) {
    return 2 * isTurn(disksNumber- 1) + 1
  }
 } 

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let result = {}
  result.turns = isTurn(disksNumber);

  result.seconds = Math.floor(3600 / turnsSpeed * result.turns)
  return result;
};

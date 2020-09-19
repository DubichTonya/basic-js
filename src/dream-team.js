const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!(Object.prototype.toString.call(arr) === '[object Array]')) {
    return false;
  }
  let newArray = [];
  arr.forEach(function(element) {

    if (typeof (element) == 'string') {
      newArray.push(element)
    }
  });

  newArray = newArray.map((element) => {
    return (element.split().join('').trim().toUpperCase()[0])
  })
  return (newArray.sort().join(''))
};

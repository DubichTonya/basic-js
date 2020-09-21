const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(objDate) {
  if(objDate === null || objDate == Date.prototype.toString.call(new Date())) {
    throw new Error()
  } else if(objDate === undefined) {
    return 'Unable to determine the time of year!';
  } else if(typeof(objDate) === 'object' && objDate != null) {
    let month = objDate.getMonth() + 1;
    let season = '';
    if(month > 0 && month < 3 || month == 12) {
      season = 'winter';
    } else if (month > 2 && month < 6) {
      season = 'spring';
    } else if (month > 5 && month < 9) {
      season = 'summer';
    } else {
      season = 'autumn (fall)';
    }
    return season;
  } else {
    throw new Error()
  }
};
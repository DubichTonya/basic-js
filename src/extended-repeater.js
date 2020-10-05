const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if(options.separator === undefined){
    options.separator = '+'
  } else if(options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  let result;

  if (typeof (str) !== 'string') {
    str = str + '';
  }

  if (options.repeatTimes) {
    result = [];
    

    if (`${options.addition}` && options.addition !== undefined) {
      let substr;

      if (options.additionRepeatTimes) {
        substr = [];

        for (let i = 0; i < options.additionRepeatTimes; i++) {
          substr.push(`${options.addition}`)
        }

        for (let j = 0; j < substr.length - 1; j++) {
          substr[j] += options.additionSeparator;
        }

        substr = substr.join('')
        // console.log(substr)
      } else {
        substr = options.addition;
      }
      str += substr;
    } 
  
    for(let k = 0; k < options.repeatTimes; k ++) {
      result.push(str)
    }

    for(let n = 0; n < options.repeatTimes - 1; n ++) {
      result[n] += options.separator
    }
    result = result.join('')
  } else {
    if (options.addition) {
      let substr;

      if (options.additionRepeatTimes) {
        substr = [];

        for (let i = 0; i < options.additionRepeatTimes; i++) {
          substr.push(options.addition)
        }

        for (let j = 0; j < substr.length - 1; j++) {
          substr[j] += options.additionSeparator;
        }

        substr = substr.join('')
        
      } else {
        substr = options.addition;
      }
      str += substr;
    } 
    result = str;
  }

  return result;
};
  
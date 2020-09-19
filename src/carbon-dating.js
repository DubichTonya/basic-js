const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) === 'string') {

    if (sampleActivity.split('').indexOf('.') != -1) {
      let count = 0
      for (let i = 0; i < sampleActivity.split('').length; i++) {
        if (sampleActivity.split('')[i] === '.') {
          count++
        }
      }

      if (+sampleActivity > 15 || +sampleActivity < 0) {
        return false
      }
      if (count > 1) {
        sampleActivity = parseFloat(sampleActivity);
        let k = 0.693 / HALF_LIFE_PERIOD;
        let time = Math.log(MODERN_ACTIVITY / sampleActivity) / k
        return (Math.ceil(time))
      } else if (count = 1) {
        let k = 0.693 / HALF_LIFE_PERIOD;
        let time = Math.log(MODERN_ACTIVITY / sampleActivity) / k
        return (Math.ceil(time))
      }


    }

    if (+sampleActivity < 15 && +sampleActivity > 0) {
      let k = 0.693 / HALF_LIFE_PERIOD;
      let time = Math.log(MODERN_ACTIVITY / sampleActivity) / k
      return (Math.ceil(time))
    }
  }

  return false;
};

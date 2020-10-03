const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {

    if (Array.isArray(array)) {
      return 1 + array.reduce((a, b) => Math.max(a, this.calculateDepth(b)), 0)
    } else {
      return 0;
    }
  };
};
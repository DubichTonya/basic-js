const CustomError = require("../extensions/custom-error");

const chainMaker = {
  subArr: [],

  deleteArr() {
    this.subArr = []
  },
  
  getLength() {
    return this.subArr.length;
  },
  addLink(a = ' ') {
    
      this.subArr.push(`${a}`)
      return this
  
  },
  removeLink(position) {
    if((position ^ 0) !== position || position < 1 || typeof(position) !== 'number' || position > this.subArr.length) {
      this.deleteArr()
      throw new Error;
    }
    else {
      this.subArr.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.subArr.reverse()
    return this
  },
  finishChain() {
    let result = '';
    if (this.subArr.length === 1) {
      result = `( ${this.subArr[0]} )`
    } else if (this.subArr.length > 1) {
      for (let i = 0; i < this.subArr.length -1; i++) {
        result += `( ${this.subArr[i]} )~~`;
      }
      result += `( ${this.subArr[this.subArr.length-1]} )`
    }
   
    this.deleteArr()
    return `${result}`;
  }
};

module.exports = chainMaker;

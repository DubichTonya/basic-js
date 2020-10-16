const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  codeGenerator = function(str, key) {
    let keyCode = [];
    for(let i = 0; i < str.length; i++) {
      keyCode.push(key[(key.length + i)%key.length])
    }
    return keyCode
  }

  encrypt(str, key) {
   
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  str = str.toLowerCase()
  key = key.toLowerCase();
  
  let space = {};
  str.split('').map((item, index) => {
    if (!(item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)){
      space[index] = item;
      return space;
    }
  });
  let subStr = str.match(/\w/g);

  let keyCode = this.codeGenerator(subStr, key)

  let strTemp = [] 
  let codeTemp = []
  let resArr = [];
  
  for(let i = 0; i < str.length; i++){
    if(alphabet.indexOf(str[i]) !== -1) {
      strTemp.push(alphabet.indexOf(str[i]))
    }
  }

  for(let i = 0; i < keyCode.length; i++){
    if(alphabet.indexOf(keyCode[i]) !== -1) {
      codeTemp.push(alphabet.indexOf(keyCode[i]))
    }
  }

  for(let i = 0; i < keyCode.length; i++){
    resArr.push(alphabet[(strTemp[i] + codeTemp[i])%26])
  }

  for(key in space){
    resArr.splice(key, 0, space[key])
  }
  
  return resArr.join('').toUpperCase();
  }


  decrypt(str, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    str = str.toLowerCase()
    key = key.toLowerCase();
    
    let space = {};
    str.split('').map((item, index) => {
      if (!(item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)){
        space[index] = item;
        return space;
      }
    });
    
    let subStr = str.match(/\w/g);
    let keyCode = this.codeGenerator(subStr, key)
    let strTemp = [] 
    let codeTemp = []
    let resArr = [];
    
    for(let i = 0; i < str.length; i++){
      if(alphabet.indexOf(str[i]) !== -1) {
        strTemp.push(alphabet.indexOf(str[i]))
      }
    }
    
    for(let i = 0; i < keyCode.length; i++){
      if(alphabet.indexOf(keyCode[i]) !== -1) {
        codeTemp.push(alphabet.indexOf(keyCode[i]))
      }
    }

    for(let i = 0; i < keyCode.length; i++){
      resArr.push(alphabet[Math.abs((codeTemp[i] - strTemp[i]-26)%26)])
    }
  
    for(key in space){
      resArr.splice(key, 0, space[key])
    }
    
    return resArr.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;

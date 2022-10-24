const conversion = require("./conversion")
const words = require("./words")
const pbkdf2 = require('pbkdf2')

function getMnemonic(entropy) {

    const mnemonic = []
  
    const wordBit = new Array()
  
    let i = 0;
  
    while (i < entropy.length) {
  
      wordBit.push(entropy.slice(i, i + 11))
  
      i = i + 11;
  
    }
  
  
    for (let i = 0; i < words.length; i++) {
  
      const bin = conversion.decToBin(i, 11);
  
  
      for (let j = 0; j < wordBit.length; j++) {
  
  
        if (wordBit[j] === bin) {
  
          mnemonic[j] = words[i]
        }
  
      }
  
  
  
    }
  
    return mnemonic
  
  
  }


  async function mnemonicToSeed(mnemonic) {

    const mnemonicString = mnemonic.join(' ');
    const data = pbkdf2.pbkdf2Sync(mnemonicString, "mnemonic", 2048, 64, 'sha512')
    console.log(data)
    return data.toString('hex');
  
  
  }
  
  module.exports={
    mnemonicToSeed,
    getMnemonic
  };

 
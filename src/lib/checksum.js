const conversion = require("./conversion")

async function checksum(randomBit) {

    //Convert Binary to Hex
    
    const hexOfRandomBit = conversion.bin2hex(randomBit)
  
  
    //Get the sha256 hash of the randomEntropy
    const hashOfHex = await conversion.sha256(hexOfRandomBit);
    console.log("HexOF random",hexOfRandomBit)
    const checksumBit = conversion.hex2bin(hashOfHex).slice(0, 4);
  
    return checksumBit;
  
  }
  
  module.exports = checksum
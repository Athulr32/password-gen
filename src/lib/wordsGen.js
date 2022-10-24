import entropyGen from "./entropy";
import mnemonic from "./mnemonic"
import checksum from "./checksum";

async function wordsGen() {

    //Random generated Bit
    const randomBit = entropyGen();
  
    //Checksum of the Hash
    const checksumBit = await checksum(randomBit)
  
    //Random entropy bit including checksum
    const randomEntropy = randomBit + checksumBit;
  
    //Mnemonic words
    const mnemonics = mnemonic.getMnemonic(randomEntropy);
  
    return mnemonics;

}

export default wordsGen;
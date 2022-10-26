import { useState } from "react";
import { bin2hex, decToBin, hex2bin, sha256 } from "../../lib/conversion"

import "./PasswordGen.css"


function PasswordGen({ seed }) {


    const [site, setSite] = useState(null);
    const [password, setPass] = useState(null);

    function onChangeEventHandler(e) {
        console.log(e.target.value)
        setSite(e.target.value)


    }

    async function generatePass() {

        const binaryOfSite = []
        for (let i = 0; i < site.length; i++) {
            binaryOfSite.push(decToBin(site.charCodeAt(i)))
        }

        const binOfSeed = hex2bin(seed);
        const binOfSite = binaryOfSite.join("");
        const total = bin2hex(binOfSeed + binOfSite);

        const hash = await (await sha256(total)).slice(0,20);
     
        const hashArray = hash.split("");
        for(let i=2;i<hashArray.length;i=i+3){

            if(isNaN(hashArray[i])){

                hashArray[i]=hashArray[i].toLocaleUpperCase();

            }

        }
        hashArray.splice(4,0,"-");
        hashArray.splice(9,0,"-");
        hashArray.splice(14,0,"-");
        hashArray.splice(19,0,"-");
        console.log(typeof hashArray[2]);
        console.log(hashArray)
        setPass(hashArray);

    }

    return (
        <div className="passwordgen_main">


            <div>
                <h1>Enter the name of the website/app</h1>
            </div>

            <div>
                <input className="website_name" onChange={onChangeEventHandler} type="text" />
            </div>
            <div>
                <button className="mnemonic_submit"  onClick={generatePass}>Generate</button>
            </div>

            <div>
                <span>Password: </span><span>{password}</span>
            </div>

        </div>
    )
}

export default PasswordGen;
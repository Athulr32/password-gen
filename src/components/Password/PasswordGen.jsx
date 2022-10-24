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

        const hash = await sha256(total);
        console.log(hash.length)
        setPass(hash.slice(0,20));

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
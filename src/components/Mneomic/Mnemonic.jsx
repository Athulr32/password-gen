
import { useState } from "react";
import wordsGen from "../../lib/wordsGen";

import { Link } from "react-router-dom";

function Mnemonic() {
    const [word,setWords] = useState(false);

   async function generateWords(){

        const wrd = await wordsGen()
        setWords(wrd.join(" "));
    }


    return (
        <div>

            <div>
                <h1>Use this Words to recover your password</h1>
            </div>

            <div>
                <button onClick={generateWords}>Generate</button>
            </div>

            <div>
                {word?<div> {word}</div>:""}
            </div>
            
            <div>
                <button><Link to="/home"> Generate Password</Link></button>
            </div>
        </div>
    )

}

export default Mnemonic;
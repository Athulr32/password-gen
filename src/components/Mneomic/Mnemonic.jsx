
import { useState } from "react";
import wordsGen from "../../lib/wordsGen";
import "./Mnemonic.css"
import { NavLink } from "react-router-dom";
import Words from "./Words";

function Mnemonic() {
    const [word, setWords] = useState(false);

    async function generateWords() {

        const wrd = await wordsGen()
        setWords(wrd.join(" "));
    }


    return (
        <div className="mnemonic_gen" style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center'
        }}>

            <div>
                <h1>Use this Words to Set/recover your password</h1>
                <div>If you loss These words you can't recover it!!!</div>
            </div>

            <div>
                <button className="generate_button" onClick={generateWords}>Generate</button>
            </div>

            <div style={{
                width: "100%",
                height: "70px",
                verticalAlign: 'middle'
            }}>
                
                {word ? <Words word={word}></Words> : ""}

            </div>

            <div>
                <div style={{
                    margin: '20px'
                }}>Click here to generate Password</div>
                <div style={{

                }}>
                    <NavLink to="/password"> Generate Password</NavLink>
                </div>

            </div>
        </div>
    )

}

export default Mnemonic;
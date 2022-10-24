import { useRef, useState } from "react";
import verify from "../../lib/verifymnemonic/verify"
import mnemonicToSeed from "../../lib/mnemonic";
import Password from "./Password";
import "./ImportMnemonic.css"


function ImportMnemonic({ gotPass }) {

    const word1 = useRef(null)
    const word2 = useRef(null)
    const word3 = useRef(null)
    const word4 = useRef(null)
    const word5 = useRef(null)
    const word6 = useRef(null)
    const word7 = useRef(null)
    const word8 = useRef(null)
    const word9 = useRef(null)
    const word10 = useRef(null)
    const word11 = useRef(null)
    const word12 = useRef(null)

    const [invalid, setInvalid] = useState(false);
    const [gotWords, setGotWords] = useState(false);
    const [mnemonicSeed, setmnemoicSeed] = useState(null);

    async function verifyMnemonics() {

        const mnemonicArray = [];
        mnemonicArray.push(word1.current.value);
        mnemonicArray.push(word2.current.value);
        mnemonicArray.push(word3.current.value);
        mnemonicArray.push(word4.current.value);
        mnemonicArray.push(word5.current.value);
        mnemonicArray.push(word6.current.value);
        mnemonicArray.push(word7.current.value);
        mnemonicArray.push(word8.current.value);
        mnemonicArray.push(word9.current.value);
        mnemonicArray.push(word10.current.value);
        mnemonicArray.push(word11.current.value);
        mnemonicArray.push(word12.current.value);

        const isValid = await verify(mnemonicArray);
        console.log('Valid', isValid)

        if (!isValid) {

            setInvalid(true)

        }
        else {


            setmnemoicSeed(mnemonicArray);
            setInvalid(false);
            setGotWords(true);

        }


    }

    async function calculateSeed(pass) {
        const seed = await mnemonicToSeed(mnemonicSeed, pass)

        gotPass(seed)


    }


    return (
        <div>


            {!gotWords &&

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: "5%",
                    textAlign:'center',
                    margin:"20px"
                }} className="mnemonic_import">

                    <div>
                        <h1>Import your Secret Recovery Phrase</h1>
                    </div>

                    <div>

                        <table>
                            <tbody>
                                <tr>
                                    <td><span>1. </span> <input ref={word1} type="text" /></td>
                                    <td><span>2. </span> <input ref={word2} type="text" /></td>
                                    <td><span>3. </span> <input ref={word3} type="text" /></td>
                                </tr>
                                <tr>
                                    <td><span>4.</span> <input ref={word4} type="text" /></td>
                                    <td><span>5. </span> <input ref={word5} type="text" /></td>
                                    <td><span>6. </span> <input ref={word6} type="text" /></td>
                                </tr>
                                <tr>
                                    <td><span>7. </span> <input ref={word7} type="text" /></td>
                                    <td><span>8.</span> <input ref={word8} type="text" /></td>
                                    <td><span>9. </span> <input ref={word9} type="text" /></td>
                                </tr>
                                <tr>
                                    <td><span>10.</span> <input ref={word10} type="text" /></td>
                                    <td><span>11.</span> <input ref={word11} type="text" /></td>
                                    <td><span>12.</span> <input ref={word12} type="text" /></td>
                                </tr>

                            </tbody>


                        </table>

                        <div>
                            <button className="mnemonic_submit" onClick={verifyMnemonics}>Submit</button>
                        </div>

                    </div>
                    <div>
                        {invalid ? <div> Invalid Seed</div> : ""}

                    </div>

                </div>}



            <div>
                {gotWords && <Password calculateSeed={calculateSeed}></Password>}
            </div>

        </div >
    )

}

export default ImportMnemonic
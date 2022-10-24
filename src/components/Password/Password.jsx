import { useRef } from "react";


function Password({ calculateSeed }) {

    const pass = useRef(null)

    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center'
        }} className="password_enter">

            <div style={{
                margin:'20px'
            }}>
                <h1>Enter a Password to generate your credentails </h1>
                <div>Use this password along with the 12 words to recover your credentails</div>
                <div>You can have different passwords and can create different credentails with the same words</div>
                <div>One password can be used for testing purpose other can be used for social media etc.</div>
            </div>

            <div style={{
                margin:'20px'
            }}>
                <input style={{
                    height:"40px",
                    width:"200px"
                }} ref={pass} type="text" />
            </div>

            <div style={{
                margin:'20px'
            }}>
                <button className="mnemonic_submit"  onClick={() => {
                    calculateSeed(pass.current.value)
                }}>Submit</button>
            </div>
        </div>
    )
}

export default Password;
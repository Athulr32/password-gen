import { useState } from "react";
import ImportMnemonic from "./ImportMnemonic"
import PasswordGen from "./PasswordGen";

function PasswordHome() {

    const [gotPassword,setgotPassword] = useState(false);
    const [seed,setSeed] = useState(null);

    function gotPass(seed){
        console.log("Hi")
        setgotPassword(true)
        setSeed(seed);

    }

    return (
        <div>
          {!gotPassword && <ImportMnemonic gotPass={gotPass}/>}
          {gotPassword && <PasswordGen seed={seed}/>}
        
        </div>
    )

}


export default PasswordHome;
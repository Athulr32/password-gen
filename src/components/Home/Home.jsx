import React from "react";
import { Link, NavLink } from "react-router-dom";


function Home() {

    return (
        <div>


            <div style={{
                display: "flex",
                alignItems: "center",
                flexDirection: 'column'
            }}>
                <div style={{
                    marginTop: "330px",
                    textAlign: "center",
                    widows: "75%"
                }}>
                    <h1>Generate your cryptographically Secured password for All Sites from 12 words without saving it anywhere </h1>
                </div>

                <div style={{
                    display: "flex"
                }}>
                    <div style={{
                        margin: "40px",
                        textAlign: "center",
                        width: "120px",
                        height: "40px"
                    }}>
                        <button style={{
                            width: "100%",
                            height: "100%",
                            border: 'none'
                        }}><NavLink to="/generate">Create Words</NavLink>
                        </button>

                    </div>

                    <div style={{
                        margin: "40px",
                        textAlign: "center",
                        width: "120px",
                        height: "40px"
                    }}>
                        <button style={{
                            width: "100%",
                            height: "100%",
                            border: 'none'
                        }} >
                            <Link to="/password">Get password</Link>
                        </button>

                    </div>
                </div>

            </div>

        </div>

    )

}


export default Home;
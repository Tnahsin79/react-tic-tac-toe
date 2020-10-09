//import { useState, useEffect, useRef } from "react";
import React from "react";
import "../style.css";

const Reset = (props) => {
    const reset = props.reset;
    return (
        <div className="btncontainer">
            <button onClick={reset} className="btn btn-primary">RESTART</button>
        </div>
    )
}
export default Reset;
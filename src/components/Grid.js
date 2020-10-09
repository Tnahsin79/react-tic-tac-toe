import { useState, useEffect, useRef } from "react";
import React from "react";
import "../style.css";

const Grid = (props) => {
    const winner = props.winner;
    const turn = props.turn;
    const setValue = props.setValue;
    const [symbol, setSymbol] = useState(true);

    /*useEffect(() => {
        if (!turn.includes({ "value": "" }) || winner !== "")
            setSymbol(null);
    }, [turn, winner]);*/

    const onClicked = (e) => {
        setValue(e.target.id, symbol);
        if (symbol === true)
            setSymbol(false);
        if (symbol === false)
            setSymbol(true);
    }

    //if (!turn.includes({ "value": "" }))
    //    setSymbol(null);

    return (
        <div className="container">
            {
                symbol ?
                    <h5>Turn: O</h5>
                    : <h5>Turn: X</h5>
            }
            <table>
                <tbody>
                    <tr>
                        <td onClick={onClicked} id="0">{turn[0].value}</td>
                        <td className="vert" onClick={onClicked} id="1">{turn[1].value}</td>
                        <td onClick={onClicked} id="2">{turn[2].value}</td>
                    </tr>
                    <tr>
                        <td className="hori" onClick={onClicked} id="3">{turn[3].value}</td>
                        <td className="vert hori" onClick={onClicked} id="4">{turn[4].value}</td>
                        <td className="hori" onClick={onClicked} id="5">{turn[5].value}</td>
                    </tr>
                    <tr>
                        <td onClick={onClicked} id="6">{turn[6].value}</td>
                        <td className="vert" onClick={onClicked} id="7">{turn[7].value}</td>
                        <td onClick={onClicked} id="8">{turn[8].value}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Grid;

/**/
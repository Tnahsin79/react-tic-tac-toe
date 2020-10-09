import React, { Fragment, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import Grid from "./components/Grid";
import Reset from "./components/Reset";
//import "./style.css";

const App = () => {

    const [turn, setTurn] = useState(
        localStorage.getItem("turn")
            ? JSON.parse(localStorage.getItem("turn"))
            : [
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" }
            ]
    );
    const [winner, setWinner] = useState("");

    useEffect(() => {
        localStorage.setItem("turn", JSON.stringify(turn));
    }, [turn]);

    const setValue = (ind, symbol) => {
        setTurn(turn.map((x, index) => {
            if (index === parseInt(ind)) {
                if (symbol === true)
                    x.value = "O";
                if (symbol === false)
                    x.value = "X";
            }
            return x;
        })
        )
        console.log(turn);
        checkResult();
        /*if (turn[0].value === turn[1].value && turn[1].value === turn[2].value)
            setWinner(turn[0].value);
        if (turn[3].value === turn[4].value && turn[4].value === turn[5].value)
            setWinner(turn[3].value);
        if (turn[6].value === turn[7].value && turn[7].value === turn[8].value)
            setWinner(turn[6].value);

        if (turn[0].value === turn[3].value && turn[3].value === turn[6].value)
            setWinner(turn[0].value);
        if (turn[1].value === turn[4].value && turn[4].value === turn[7].value)
            setWinner(turn[1].value);
        if (turn[2].value === turn[5].value && turn[5].value === turn[8].value)
            setWinner(turn[2].value);

        if (turn[0].value === turn[4].value && turn[4].value === turn[8].value)
            setWinner(turn[0].value);
        if (turn[2].value === turn[4].value && turn[4].value === turn[6].value)
            setWinner(turn[2].value);
        console.log(winner);*/
    }
    //console.log(winner);
    const checkResult = () => {
        if (winner === "") {
            if (turn[0].value === turn[1].value && turn[1].value === turn[2].value)
                setWinner(turn[0].value);
            if (turn[3].value === turn[4].value && turn[4].value === turn[5].value)
                setWinner(turn[3].value);
            if (turn[6].value === turn[7].value && turn[7].value === turn[8].value)
                setWinner(turn[6].value);

            if (turn[0].value === turn[3].value && turn[3].value === turn[6].value)
                setWinner(turn[0].value);
            if (turn[1].value === turn[4].value && turn[4].value === turn[7].value)
                setWinner(turn[1].value);
            if (turn[2].value === turn[5].value && turn[5].value === turn[8].value)
                setWinner(turn[2].value);

            if (turn[0].value === turn[4].value && turn[4].value === turn[8].value)
                setWinner(turn[0].value);
            if (turn[2].value === turn[4].value && turn[4].value === turn[6].value)
                setWinner(turn[2].value);
        }
    }

    console.log(winner);

    const reset = () => {
        setTurn(
            [
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" },
                { "value": "" }
            ]
        );
        setWinner("");
    }

    return (
        <Fragment>
            <Title text="TIC-TAC-TOE" />
            <Grid turn={turn} setValue={setValue} winner={winner} />
            {
                winner !== "" ? <h2>Winner is player {winner}</h2> : null
            }
            <Reset reset={reset} />
        </Fragment>
    );
};

ReactDOM.render(<App />, document.querySelector("#app-root"));
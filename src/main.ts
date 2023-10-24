import "./style.css";

const previousTurn = document.getElementById("previous-button");
const resetTurn = document.getElementById("reset-button");
const nextTurn = document.getElementById("next-button");
const inputTurn = document.getElementById("input-turn") as HTMLInputElement;
const setTurn = document.getElementById("set-button");

let turn: number = 0;

function electTurn (turn: number) {
    const displayTurn = document.getElementById("turn-display");
    if (displayTurn !== null && displayTurn !== undefined) {
    displayTurn.innerHTML = turn.toString().length === 1 ? "0" + turn.toString() : turn.toString();
}
}

function previous () {
    turn = turn !== 0 ? --turn : 0;
    electTurn(turn);
}

function reset () {
    turn = 0;
    electTurn(turn);
}

function next () {
    turn++;
    electTurn(turn);
}

function setManual (manualTurn: string) {
    const numeralTurn = Number(manualTurn);
    turn = numeralTurn > 0 ? numeralTurn : 0;
    if (setTurn !== null && setTurn !== undefined) {
    setTurn.addEventListener("click", () => electTurn(turn));
    }
}

if (previousTurn !== null && previousTurn !== undefined) {
previousTurn.addEventListener("click", previous);
}


if (resetTurn !== null && resetTurn !== undefined) {
resetTurn.addEventListener("click", reset);
}

if (nextTurn !== null && nextTurn !== undefined) {
nextTurn.addEventListener("click", next);
}

if (inputTurn !== null && inputTurn !== undefined){
inputTurn.addEventListener("change", () => setManual(inputTurn.value));
}
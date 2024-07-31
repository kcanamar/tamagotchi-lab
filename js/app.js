/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
// Our global state object
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

let timer, gameOver; // This will assign the timer and gameOver a value of undefined



/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepinessStatEl = document.querySelector('#sleepiness-stat')

const playBtnEl = document.querySelector("#play")
const feedBtnEl = document.querySelector("#feed")
const sleepBtnEl = document.querySelector("#sleep")

const gameMessageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("#restart")

/*-------------------------------- Functions --------------------------------*/

// Upon loading or app.js script
init() // the function call 
// Function declarations

function init(){
    console.log("init working")
    gameOver = false;
    timer = setInterval(runGame, 2000)
    render()
}

function runGame() {
    console.log("game running")
}

function render(){
    console.log("content rendering")
}
/*----------------------------- Event Listeners -----------------------------*/



import {resultsCalc, resultsText} from './modules/results.mjs'

let userScore = 0;
let compScore = 0;
let userPick = null;
let compPick = null;
let results = null;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const results_div = document.querySelector('.results');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

rock_div.addEventListener('click', () => {
    console.log('Rock');
    userPick = 0;
    compPick = Math.floor(Math.random()*3);
    results = resultsCalc(userPick, compPick);
    results_div.innerHTML = `<p>${resultsText(results)}</p>`;
    if (results == 1) {
        userScore++;
        userScore_span.innerHTML = `${userScore}`;
    }
    else if (results == 2) {
        compScore++;
        compScore_span.innerHTML = `${compScore}`;
    }
});

paper_div.addEventListener('click', () => {
    console.log('Paper');
    userPick = 1;
    compPick = Math.floor(Math.random()*3);
    results = resultsCalc(userPick, compPick);
    results_div.innerHTML = `<p>${resultsText(results)}</p>`;
    if (results == 1) {
        userScore++;
        userScore_span.innerHTML = `${userScore}`;
    }
    else if (results == 2) {
        compScore++;
        compScore_span.innerHTML = `${compScore}`;
    }
});

scissors_div.addEventListener('click', () => {
    console.log('Scissors');
    userPick = 2;
    compPick = Math.floor(Math.random()*3);
    results = resultsCalc(userPick, compPick);
    results_div.innerHTML = `<p>${resultsText(results)}</p>`;
    if (results == 1) {
        userScore++;
        userScore_span.innerHTML = `${userScore}`;
    }
    else if (results == 2) {
        compScore++;
        compScore_span.innerHTML = `${compScore}`;
    }
});
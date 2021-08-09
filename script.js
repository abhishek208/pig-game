"use strict";

const score0EL = document.querySelector("#score--0");
const score1EL = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const playerE0 = document.querySelector(".player--0");
const playerE1 = document.querySelector(".player--1");
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add("Hidden");
let currentScore = 0;
let activeplayer = 0;
let playing = true;

let scores = [0, 0];
const swapPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentScore = 0;
  playerE0.classList.toggle("player--active");
  currentScore = 0;
  playerE1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("Hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(
        `current--${activeplayer}`
      ).textContent = currentScore;
    } else {
      swapPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("Hidden");
    }
    swapPlayer();
  }
});
btnNew.addEventListener("click", function () {
  scores = [0, 0];
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  diceEl.classList.add("Hidden");
  activeplayer = 0;
  playerE1.classList.remove("player--active");
  playerE0.classList.add("player--active");

  playing = true;
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  current0El.textContent = 0;
  current1El.textContent = 0;
});

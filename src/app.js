import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

const suits = [
  { symbol: "\u2665", name: "Corazones", color: "red" },
  { symbol: "\u2660", name: "Picas", color: "black" },
  { symbol: "\u2663", name: "Treboles", color: "black" },
  { symbol: "\u2666", name: "Diamantes", color: "red" }
];

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const getRandomItem = items => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

const renderRandomCard = () => {
  const randomSuit = getRandomItem(suits);
  const randomValue = getRandomItem(values);
  const cardElement = document.querySelector("[data-card]");

  document.querySelector("[data-card-value]").textContent = randomValue;
  document.querySelector("[data-card-suit-top]").textContent = randomSuit.symbol;
  document.querySelector("[data-card-suit-bottom]").textContent = randomSuit.symbol;

  cardElement.className = `playing-card ${randomSuit.color}`;
  cardElement.setAttribute("aria-label", `${randomValue} de ${randomSuit.name}`);
};

window.onload = function () {
  document
    .querySelector("[data-draw-button]")
    .addEventListener("click", renderRandomCard);

  renderRandomCard();
};

import React from "react";
import { useHistory } from "react-router";
import cardBack from "../../deck/card-back.png";

import "./FlipCard.css";

export default function FlipCard({ setLevel, setIsCore }) {
  const history = useHistory();

  const pickDeck = (lvl, abs) => {
    setLevel(lvl);
    setIsCore(abs);
    history.push("/play");
  };

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={cardBack} alt="cardBack" id="card__back" />
        </div>
        <div class="flip-card-back">
          <h1>Decks</h1>
          <button className="deck__options" onClick={() => pickDeck(1, false)}>
            Bodyweight Deck Easy
          </button>
          <button className="deck__options" onClick={() => pickDeck(2, false)}>
            Bodyweight Deck Medium
          </button>
          <button className="deck__options" onClick={() => pickDeck(3, false)}>
            Bodyweight Deck Hard
          </button>
          <button className="deck__options" onClick={() => pickDeck(1, true)}>
            Core Deck Easy
          </button>
          <button className="deck__options" onClick={() => pickDeck(2, true)}>
            Core Deck Medium
          </button>
          <button className="deck__options" onClick={() => pickDeck(3, true)}>
            Core Deck Hard
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useHistory } from "react-router";
import cardBack from "../../deck/card-back.png";

import "./FlipCard.css";

export default function FlipCard({ setLevel }) {
  const history = useHistory();

  const pickDeck = (lvl) => {
    setLevel(lvl);
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
          <button className="deck__options" onClick={() => pickDeck(1)}>
            Bodyweight Deck Easy
          </button>
          <button className="deck__options" onClick={() => pickDeck(2)}>
            Bodyweight Deck Medium
          </button>
          <button className="deck__options" onClick={() => pickDeck(3)}>
            Bodyweight Deck Hard
          </button>
          <button className="deck__options" onClick={() => pickDeck(1)}>
            Stretch Deck Easy
          </button>
          <button className="deck__options" onClick={() => pickDeck(2)}>
            Stretch Deck Medium
          </button>
          <button className="deck__options" onClick={() => pickDeck(3)}>
            Stretch Deck Hard
          </button>
        </div>
      </div>
    </div>
  );
}

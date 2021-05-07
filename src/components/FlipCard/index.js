import React from "react";
import cardBack from "../../deck/card-back.png";

import "./FlipCard.css";

export default function FlipCard() {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={cardBack} alt="cardBack" id="card__back" />
        </div>
        <div class="flip-card-back">
          <h1>Main Menu</h1>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
      </div>
    </div>
  );
}

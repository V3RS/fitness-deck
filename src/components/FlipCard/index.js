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
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}

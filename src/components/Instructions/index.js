import React from "react";
import "./Instructions.css";
import FlipCard from "../FlipCard";
import { useHistory } from "react-router";

export default function Instructions({ setLevel }) {
  const history = useHistory();

  return (
    //   used same CSS as splash page to hold site consistency
    <div className="splash__c">
      <button id="back" onClick={() => history.push("/")}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <div className="splash__left__c">
        <div className="splash__intro">Fitness Deck</div>
        <div className="splash__title">Instructions</div>
        <div className="splash__description">
          There are currently two different decks and three different
          difficulties. Depending on the difficulty of the deck is what
          determines the amount of an exercise you do. Each suit is a different
          exercise. You can draw cards by clicking the deck in bottom left. Once
          you draw a card it will display a GIF of the exercise and you can get
          started! The goal is to get through all 52 cards! Take rest as needed.
          To get start hover over the Fitness Deck to the right and select a
          deck. Good luck and have a great workout!
        </div>
        <a
          id="dev__btn__completed"
          className="meet__the__dev"
          target="_blank"
          href="http://vsingh.dev"
        >
          MEET THE DEV
        </a>
      </div>
      <div className="splash__right__c">
        <div className="flip__card__c">
          <FlipCard setLevel={setLevel} />
        </div>
      </div>
    </div>
  );
}

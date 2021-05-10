import React from "react";
import "./Splash.css";
import FlipCard from "../FlipCard";
import { useHistory } from "react-router";

export default function Splash({ setLevel, setIsCore }) {
  const history = useHistory();

  return (
    <div className="splash__c">
      <button className="back">
        <i className="fas fa-dumbbell"></i>
      </button>
      <div className="splash__left__c">
        <div className="splash__intro">INTRODUCING</div>
        <div className="splash__title">Fitness Deck</div>
        <div className="splash__description">
          A fun way to stay active using playing cards! Get started by hovering
          over the Fitness Deck.
        </div>
        <button
          className="meet__the__dev"
          onClick={() => history.push("/instructions")}
        >
          HOW TO PLAY
        </button>
      </div>
      <div className="splash__right__c">
        <div className="flip__card__c">
          <FlipCard setLevel={setLevel} setIsCore={setIsCore} />
        </div>
      </div>
    </div>
  );
}

// add an ab deck

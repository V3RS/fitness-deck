import React from "react";
import "./Splash.css";
import FlipCard from "../FlipCard";
import { useHistory } from "react-router";

export default function Splash({ setLevel }) {
  const history = useHistory();

  return (
    <div className="splash__c">
      <div className="splash__left__c">
        <div className="splash__intro">INTRODUCING</div>
        <div className="splash__title">Fitness Deck</div>
        <div className="splash__description">
          A fun way to stay active using playing cards! Get started by hovering
          over the Fitness Deck.
        </div>
        {/* <a className="meet__the__dev" target="_blank" href="http://vsingh.dev">
          MEET THE DEV
        </a> */}
        <button
          className="meet__the__dev"
          onClick={() => history.push("/instructions")}
        >
          HOW TO PLAY
        </button>
      </div>
      <div className="splash__right__c">
        <div className="flip__card__c">
          <FlipCard setLevel={setLevel} />
        </div>
      </div>
      {/* <div>TEST SPLASH</div> */}
    </div>
  );
}

// add an ab deck

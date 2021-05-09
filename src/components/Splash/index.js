import React from "react";
import "./Splash.css";
import FlipCard from "../FlipCard";

export default function Splash() {
  return (
    <div className="splash__c">
      <div className="splash__left__c">
        <div className="splash__intro">INTRODUCING</div>
        <div className="splash__title">Fitness Deck</div>
        <div className="splash__description">
          A fun way to stay active with using playing cards! Get started by
          hovering over the Fitness Deck.
        </div>
        <a className="meet__the__dev">MEET THE DEV</a>
      </div>
      <div className="splash__right__c">
        <div className="flip__card__c">
          <FlipCard />
        </div>
      </div>
      {/* <div>TEST SPLASH</div> */}
    </div>
  );
}

// add an ab deck

import React from "react";
import "./Completed.css";
import FlipCard from "../FlipCard";

export default function Completed({ setLevel }) {
  return (
    //   used same CSS as splash page to hold site consistency
    <div className="splash__c">
      <div className="splash__left__c">
        <div className="splash__intro">Congratulations! On completing your</div>
        <div className="splash__title">Fitness Deck!</div>
        <div className="splash__description">
          I hope you enjoyed your workout! Currently this app is only a
          front-end application, but in the future I plan to make updates. It
          will be a full-stack application with more decks to choose from and
          you will be able to keep track of your workouts as well! If you have
          any suggestions please do not hesitate to contact me! Click the "MEET
          THE DEV" button to find my contact information, or hover over the
          Fitness Deck to the right if you are ready for another round!
        </div>
        <a id="dev__btn__completed" className="meet__the__dev">
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

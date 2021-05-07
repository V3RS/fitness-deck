import React from "react";
import "./Main.css";
import card from "../../deck/card-svgs/2_of_clubs.svg";

export default function Main() {
  return (
    <div className="card__page__c">
      <div> 2 Exercise Name</div>
      <img className="card" src={card} />

      <div className="card__page__btns">
        <button>Menu</button>
        <button>Start</button>
        <button>Draw</button>
      </div>
    </div>
  );
}

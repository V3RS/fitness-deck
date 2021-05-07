import React from "react";
import "./Main.css";
import card from "../../deck/card-svgs/2_of_clubs.svg";
import draw from "./card-draw.svg";

export default function Main() {
  return (
    <div className="card__page__c">
      <div className="card__title"> 2 Exercise Name</div>
      <img src={card} className="card" />

      <div className="card__page__btns">
        <img src={draw} className="draw__btn" />
        <button>
          <i className="fas fa-play"></i>
        </button>
        <button>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./Main.css";
import cardBack from "../../deck/card-back.png";
import jumpsquat from "../../exercises/jump-squat.gif";
import draw from "./card-draw.svg";
import Deck from "../../deck/deck";

export default function Main() {
  // let d;
  const d = new Deck();
  d.shuffle();

  // useEffect(() => {
  //   d = new Deck();
  //   d.shuffle();
  // }, []);

  const [deck, setDeck] = useState(d);
  const [card, setCard] = useState(deck[deck.cards.length - 1]);
  // console.log(card.image);

  // console.log(deck);

  return (
    <div className="card__page__c">
      <div className="card__title"> 2 Jump Squats</div>
      <img src={card?.image} className="card" />
      <img src={jumpsquat} className="exercise" />
      <img
        src={cardBack}
        className="deck"
        onClick={() => {
          setCard(deck.deal());
          setDeck(deck);
          // console.log(deck);
        }}
      />
      <img src={cardBack} className="deck2" />

      <div className="card__timer"> 50 </div>

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

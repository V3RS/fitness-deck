import React, { useState, useEffect } from "react";
import "./Main.css";
import cardBack from "../../deck/card-back.png";
import draw from "./card-draw.svg";

export default function Main({ deck, setDeck }) {
  const [card, setCard] = useState(deck[deck.cards.length - 1]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1);
    }, [1000]);
  }, [timer]);

  // screen to gif
  const bodyweight = (card) => {
    switch (card?.suit) {
      case "clubs":
        return { exercise: "Jump Squats", gif: "/exercises/jump-squat.gif" };
      case "hearts":
        return { exercise: "T Push Ups", gif: "/exercises/t-push-ups.gif" };
      case "spades":
        return { exercise: "Leg Raises", gif: "/exercises/leg-raise.gif" };
      case "diamonds":
        return { exercise: "V Ups", gif: "/exercises/v-ups.gif" };
    }
  };

  return (
    <div className="card__page__c">
      <div className="card__title">
        {" "}
        {card?.value} {bodyweight(card)?.exercise}
      </div>
      <div className="cards__left">
        {deck.cards.length} card
        {deck.cards.length > 1 || deck.cards.length === 0 ? "s" : ""} left
      </div>
      <img src={card?.image} className="card" />
      {card && <img src={bodyweight(card)?.gif} className="exercise" />}
      {deck.cards.length && (
        <span>
          <img
            src={cardBack}
            className="deck"
            onClick={() => {
              setCard(deck.deal());
              setDeck(deck);
              document.querySelector(".deck").classList.add("deck__transition");
              setTimeout(() => {
                document.querySelector(".deck").classList.add("deck__display");
              }, 3000);
              // console.log(deck);
            }}
          />
          {deck.cards.length > 1 && <img src={cardBack} className="deck2" />}
        </span>
      )}

      <div className="card__timer"> {timer} </div>

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

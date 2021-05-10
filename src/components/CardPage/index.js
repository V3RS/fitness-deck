import React, { useState } from "react";
import { useHistory } from "react-router";
import "./CardPage.css";
import cardBack from "../../deck/card-back.png";
import Deck from "../../deck/deck";

export default function CardPage({ deck, setDeck, level, setLevel }) {
  const history = useHistory();
  const [card, setCard] = useState(deck[deck.cards.length - 1]);

  const draw = () => {
    setCard(deck.deal());
    setDeck(deck);
    // document.querySelector(".deck").classList.add("deck__transition");
    // setTimeout(() => {
    //   document.querySelector(".deck").classList.add("deck__display");
    // }, 3000);
  };

  const quit = () => {
    // sets a new deck if the user quits to change decks
    const d = new Deck();
    d.shuffle();
    setDeck(d);
    history.push("/");
  };

  // function to change the exercise and gif depending on the suit
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
      <button className="quit__btn" onClick={quit}>
        Quit
      </button>
      <div className="card__title">
        {" "}
        {card && card?.value * level} {bodyweight(card)?.exercise}
      </div>
      <div className="cards__left">Cards Left: {deck.cards.length}</div>
      <img src={card?.image} className="card" />
      {card && <img src={bodyweight(card)?.gif} className="exercise" />}
      {deck.cards.length > 0 ? (
        <span>
          <img src={cardBack} className="deck" onClick={draw} />
          {deck.cards.length > 1 && <img src={cardBack} className="deck2" />}
        </span>
      ) : (
        <button className="complete__btn">Finish Workout</button>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { useHistory } from "react-router";
import "./CardPage.css";
import cardBack from "../../deck/card-back.png";
import Deck from "../../deck/deck";

export default function CardPage({ deck, setDeck, level, isCore }) {
  const history = useHistory();
  const [card, setCard] = useState(deck[deck.cards.length - 1]);

  const draw = () => {
    document.querySelector(".card")?.classList.add("card__transition");
    document.querySelector(".card__title")?.classList.add("card__transition");
    document.querySelector(".exercise")?.classList.add("card__transition");
    document.querySelector(".deck")?.classList.remove("deck__hover");
    document.querySelector(".deck")?.classList.add("deck__transition");

    setTimeout(() => {
      document.querySelector(".card")?.classList.remove("card__transition");
      document
        .querySelector(".card__title")
        .classList?.remove("card__transition");
      document.querySelector(".exercise")?.classList.remove("card__transition");
      document.querySelector(".deck")?.classList.remove("deck__transition");
      document.querySelector(".deck")?.classList.add("deck__hover");
      // after the transition effect it will set the next card
      setCard(deck.deal());
      setDeck(deck);
    }, 750);
  };

  const leave = (route) => {
    // sets a new deck if the user leaves the game
    const d = new Deck();
    d.shuffle();
    setDeck(d);
    history.push(`${route}`);
  };

  // function to change the exercise and gif depending on the suit
  const bodyweight = (card) => {
    switch (card?.suit) {
      case "clubs":
        return { exercise: "Jump Squats", gif: "/exercises/jump-squat.gif" };
      case "hearts":
        return { exercise: "T Push Ups", gif: "/exercises/t-push-ups.gif" };
      case "spades":
        return { exercise: "Glute Bridges", gif: "/exercises/bridge.gif" };
      case "diamonds":
        return { exercise: "V Ups", gif: "/exercises/v-ups.gif" };
    }
  };

  const abs = (card) => {
    switch (card?.suit) {
      case "clubs":
        return { exercise: "Leg Raises", gif: "/exercises/leg-raise.gif" };
      case "hearts":
        return {
          exercise: "Oblique Crunches",
          gif: "/exercises/oblique-crunch.gif",
        };
      case "spades":
        return {
          exercise: "Russian Twists",
          gif: "/exercises/russian-twist.gif",
        };
      case "diamonds":
        return { exercise: "V Ups", gif: "/exercises/v-ups.gif" };
    }
  };

  return (
    <div className="card__page__c">
      <button className="quit__btn" onClick={() => leave("/")}>
        Quit
      </button>
      <div className="card__title">
        {" "}
        {card && card?.value * level}{" "}
        {isCore ? abs(card)?.exercise : bodyweight(card)?.exercise}
      </div>
      <div className="cards__left">Cards Left: {deck.cards.length}</div>
      <img src={card?.image} className="card" />
      {card && (
        <img
          src={isCore ? abs(card)?.gif : bodyweight(card)?.gif}
          className="exercise"
        />
      )}
      {deck.cards.length > 0 ? (
        <span>
          <img src={cardBack} className="deck deck__hover" onClick={draw} />
          {deck.cards.length > 1 && (
            <>
              <img src={cardBack} className="deck2" />
            </>
          )}
        </span>
      ) : (
        <button className="complete__btn" onClick={() => leave("/completed")}>
          Finish Workout
        </button>
      )}
      <button
        id="instructions"
        className="meet__the__dev"
        onClick={() => leave("/instructions")}
      >
        HOW TO PLAY
      </button>
    </div>
  );
}

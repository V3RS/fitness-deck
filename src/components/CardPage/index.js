import React, { useState } from "react";
import { useHistory } from "react-router";
import "./CardPage.css";
import cardBack from "../../deck/card-back.png";
import Deck from "../../deck/deck";
import { draw, leave, bodyweight, abs } from "./resources";

export default function CardPage({ deck, setDeck, level, isCore }) {
  const history = useHistory();
  const [card, setCard] = useState(deck[deck.cards.length - 1]);

  return (
    <div className="card__page__c">
      <button
        className="quit__btn"
        onClick={() => leave("/", history, setDeck, Deck)}
      >
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
          <img
            src={cardBack}
            className="deck deck__hover"
            onClick={() => draw(setCard, setDeck, deck)}
          />
          {deck.cards.length > 1 && (
            <>
              <img src={cardBack} className="deck2" />
            </>
          )}
        </span>
      ) : (
        <button
          className="complete__btn"
          onClick={() => leave("/completed", history, setDeck, Deck)}
        >
          Finish Workout
        </button>
      )}
      <button
        id="instructions"
        className="meet__the__dev"
        onClick={() => leave("/instructions", history, setDeck, Deck)}
      >
        HOW TO PLAY
      </button>
    </div>
  );
}

export const draw = (setCard, setDeck, deck) => {
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

export const leave = (route, history, setDeck, Deck) => {
  // sets a new deck if the user leaves the game
  const d = new Deck();
  d.shuffle();
  setDeck(d);
  history.push(`${route}`);
};

// function to change the exercise and gif depending on the suit
export const bodyweight = (card) => {
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

// function to change the exercise and gif depending on the suit
export const abs = (card) => {
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

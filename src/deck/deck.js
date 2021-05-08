const Card = require("./card");

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }

  getDeck() {
    return this.cards;
  }

  createDeck() {
    const suits = ["clubs", "hearts", "spades", "diamonds"];
    // ace will be high
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    // creates cards for all different suit
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        this.cards.push(
          new Card(
            suits[i],
            values[j],
            `/card-svgs/${values[j]}_of_${suits[i]}.svg`
          )
        );
      }
    }
    return this.cards;
  }

  shuffle() {
    // shuffles the deck by creating a temp variable and getting a random number for the new index
    // iterating through every card will make sure that every card will be in a new spot
    for (let i = this.cards.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[rand];
      this.cards[rand] = temp;
    }
    return this.cards;
  }

  deal() {
    return this.cardCount() ? this.cards.pop() : null;
  }

  peak() {
    return this.cardCount() ? this.cards[this.cards.length - 1] : null;
  }

  // create a function to return this.cards.length
  cardCount() {
    return this.cards.length;
  }
}

//! To test all functionality for the class
// const d = new Deck();
// console.log("-------------");
// console.log(d.cards);
// d.shuffle();
// console.log("-------------");
// console.log(d.cards);
// console.log(d.cards.length);
// console.log(d.deal());
// console.log(d.cards.length);
// console.log(d.peak());

module.exports = Deck;

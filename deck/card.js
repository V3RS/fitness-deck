class Card {
  constructor(suit, value, image) {
    this.value = value;
    this.suit = suit;
    this.image = image;
  }
}

class Deck {
  constructor() {
    this.cards = [];
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
            `/deck/card-svgs/${values[j]}_of_${suits[i]}.svg`
          )
        );
      }
    }
    return this.cards;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[rand];
      this.cards[rand] = temp;
    }
    return this.cards;
  }

  deal() {
    if (this.cards.length) return this.cards.pop();
  }
}

//! To test all functionality for the class
// const d = new Deck();
// d.createDeck();
// console.log(d.cards);
// d.shuffle();
// console.log(d.cards);
// console.log(d.cards.length);
// console.log(d.deal());
// console.log(d.cards.length);

const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[0];
    this.incorrectGuesses = [];
    this.percent = 0;
  }

  returnCurrentCard() {
    if (this.currentCard === this.deck.cards[30]) {
      this.calculatePercentCorrect();
    } else {
      return this.currentCard;
    }
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.currentCard);
    turn.returnGuess();
    turn.returnCard();
    turn.evaluateGuess();

    if (turn.correct === false) { this.incorrectGuesses.push(this.currentCard.id)}

    this.turns++;
    this.currentCard = this.deck.cards[`${this.turns}`];

    return (turn.giveFeedback());

    // if (this.turns === 30) {
    //   console.log('here');
    //   this.calculatePercentCorrect();
    // }
  }

  calculatePercentCorrect() {
    var correct = this.turns - this.incorrectGuesses.length;
    this.percent = ((correct / this.turns).toFixed(2)*100);
  }

  endRound() {
    console.log( `** Round over! ** You answered ${this.percent}% of the questions correctly!`);
  }
}

module.exports = Round;

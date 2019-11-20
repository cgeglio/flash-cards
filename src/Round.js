const Turn = require('../src/Turn');

class Round {
  constructor(deck, startTime) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[0];
    this.incorrectGuesses = [];
    this.percent = 0;
    this.startTime = startTime;
    this.endTime;
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

    if (turn.correct === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }

    this.turns++;
    this.currentCard = this.deck.cards[`${this.turns}`];
    return (turn.giveFeedback());
  }

  calculatePercentCorrect() {
    var correct = this.turns - this.incorrectGuesses.length;
    this.percent = ((correct / this.turns).toFixed(2) * 100);
  }

  endRound() {
    this.endTime = new Date();
    // eslint-disable-next-line no-console
    console.log( `** Round over! ** You answered ${this.percent}% of the` +
       ` questions correctly!`);
    this.findTime();
  }

  findTime() {
    var timeDiff = this.endTime - this.startTime;
    timeDiff /= 1000;
    var time = Math.round(timeDiff);
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    // eslint-disable-next-line no-console
    console.log( `Your time this round was ${minutes} minutes and ${seconds}` +
      ` seconds!`);
  }
}

module.exports = Round;

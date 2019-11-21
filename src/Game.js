const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
    this.cards = [];
    this.deck = [];
  }

  start() {
    var startTime = new Date();
    for (var i = 0; i < prototypeQuestions.length; i++) {
      var card = new Card(prototypeQuestions[i]);
      this.cards.push(card);
    }

    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck, startTime);

    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
    // eslint-disable-next-line no-console
    console.log(`Welcome to FlashCards! You are playing with` +
      ` ${deck.countCards()} cards.` +
      `\n -------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }


}

module.exports = Game;

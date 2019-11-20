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
    this.deck;
  }

  start() {
    for (var i = 0; i < prototypeQuestions.length; i++) {
      var card = new Card(prototypeQuestions[i].id,
        prototypeQuestions[i].question, prototypeQuestions[i].answers,
        prototypeQuestions[i].correctAnswer);
      this.cards.push(card);
    }

    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);

    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with\
         ${deck.countCards()} cards.-------------------------------------------\
         ----------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }


}

module.exports = Game;

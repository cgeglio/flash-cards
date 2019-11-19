const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(guess, cardInfo) {
    this.guess = guess;
    // this.cardInfo = cardInfo;
    this.id = cardInfo.id;
    this.question = cardInfo.question;
    this.choices = cardInfo.choices;
    this.answer = cardInfo.answer;
    this.correct = false;
  }

  returnGuess() {
    return this.guess;
  }

  // returnCard() {
  //   return this.cardInfo;
  // }

  evaluateGuess() {
    this.guess === this.answer ? this.correct = true : this.correct = false;
  }

  giveFeedback() {
    return (this.correct ? "correct!" : "incorrect!")
  }
}



module.exports = Card;

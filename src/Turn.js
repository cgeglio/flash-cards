const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(guess, cardInfo) {
    this.guess = guess;
    this.cardInfo = cardInfo;
    this.correctAnswer = cardInfo.correctAnswer;
    this.correct = false;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.cardInfo;
  }

  evaluateGuess() {
    this.guess === this.correctAnswer ? this.correct = true : this.correct = false;
    return this.correct;
  }

  giveFeedback() {
    return (this.correct ? "correct!" : "incorrect!")
  }
}



module.exports = Turn;

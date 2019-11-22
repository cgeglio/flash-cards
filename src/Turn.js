class Turn {
  constructor(guess, cardData) {
    this.guess = guess;
    this.cardInfo = cardData;
    // this.correctAnswer = cardData.correctAnswer;
    this.correct = false;
    this.count = cardData.id;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.cardInfo;
  }

  evaluateGuess() {
    this.guess === this.cardInfo.correctAnswer ? this.correct = true : this.correct =
     false;
    return this.correct;
  }

  giveFeedback() {
    return (this.correct ? "correct!" : "incorrect!");
  }

  updateCount() {
    this.count++;
  }
}

module.exports = Turn;

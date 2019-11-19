const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


class Card {
  constructor(id, question, choices, answer) {
    this.id = id;
    this.question = question;
    this.choices = [];
    this.answer = answer;
  }
}



module.exports = Card;

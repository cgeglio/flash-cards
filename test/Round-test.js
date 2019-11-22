const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const data = require('../src/data');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function () {
    card1 = new Card(data.prototypeData[0]);
    card2 = new Card(data.prototypeData[1]);
    card3 = new Card(data.prototypeData[2]);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck of cards', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should store the number of turns, with a default value of 0', function() {
    expect(round.turns).to.equal(0);
  });

  it('should store the current card in play', function() {
    expect(round.currentCard).to.equal(card1);
  });

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should store the percent of questions answered correctly, with a default\
   of 0', function() {
    expect(round.percent).to.equal(0);
  });

  it('should be able to return the current card in play', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  describe('takeTurn()', function() {

    it('should store each of the player\'s incorrect guesses', function() {
      round.takeTurn('function');
      expect(round.incorrectGuesses[0]).to.equal(card1);
    });

    it('should return feedback if a guess is incorrect', function() {
      expect(round.takeTurn('function')).to.equal("incorrect!");
    });

    it('should return feedback if a guess is correct', function() {
      expect(round.takeTurn('object')).to.equal("correct!");
    });
  });

  describe('updateTurn()', function() {

    let turn;

    beforeEach(function () {
      turn = new Turn('array', card1);
    });

    it('should increase the turn count after the player takes a turn',
      function() {
        round.updateTurn(turn);
        expect(round.turns).to.equal(1);
      });

    it('should shift the current card to the next card in the deck after the\
     player takes a turn', function() {
      round.updateTurn(turn);
      expect(round.currentCard).to.equal(card2);
    });
  });

  describe('calculatePercentCorrect()', function() {

    it('should calculate the percentage of correct answers', function() {
      round.takeTurn('object');
      round.takeTurn('function');
      round.takeTurn('mutator method');
      round.calculatePercentCorrect();
      expect(round.percent).to.equal(67);
    });

    it('should clear out the incorrect guesses if the score is less than 90',
      function() {
        round.takeTurn('object');
        round.takeTurn('function');
        round.takeTurn('mutator method');
        round.calculatePercentCorrect();
        expect(round.incorrectGuesses).to.deep.equal([]);
      });
  });

  it('should calculate how much time it took to complete the round',
    function() {
      round.startTime = 10;
      round.calculatePercentCorrect();
      expect(round.findTime()).to.equal((round.endTime - round.startTime)
      / 1000);
    });

  describe('restartRound()', function() {

    it('should reset the turn count if the user got less than 90%', function() {
      round.takeTurn('object');
      round.takeTurn('function');
      round.takeTurn('mutator method');
      round.calculatePercentCorrect();
      expect(round.turns).to.equal(0);
    });

    it('should reset the current card to the first card in the deck',
      function() {
        round.takeTurn('object');
        round.takeTurn('function');
        round.takeTurn('mutator method');
        round.calculatePercentCorrect();
        expect(round.currentCard).to.equal(card1);
      });

  });

  it('should reset the deck to only hold the questions that were answered\
   incorrectly if the user got 90% or more correct', function() {
    round.incorrectGuesses = [card3, card2, card1];
    round.retryIncorrect();
    expect(round.deck.cards).to.equal(round.incorrectGuesses);
  });
});

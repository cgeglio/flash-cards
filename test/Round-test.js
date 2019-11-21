const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
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

  it('should be able to return the current card in play', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should be able to update the turn count when a player takes a turn',
    function() {
      round.takeTurn('object');
      expect(round.turns).to.equal(1);
      round.takeTurn('array');
      expect(round.turns).to.equal(2);
    });

  it('should shift the current card to the next card in the deck when a player\
   takes a turn', function() {
    round.takeTurn('object');
    expect(round.currentCard).to.equal(card2);
    round.takeTurn('array');
    expect(round.currentCard).to.equal(card3);
  });

  it('should shift the current card to the next card in the deck when a player\
   takes a turn', function() {
    round.takeTurn('object');
    expect(round.currentCard).to.equal(card2);
    round.takeTurn('array');
    expect(round.currentCard).to.equal(card3);
  });

  it('should store each of the player\'s incorrect guesses', function() {
    round.takeTurn('function');
    expect(round.incorrectGuesses[0]).to.equal(card1);
    round.takeTurn('function');
    expect(round.incorrectGuesses[1]).to.equal(card2);
  });

  it('should return feedback based on guesses', function() {
    expect(round.takeTurn('object')).to.equal("correct!");
    expect(round.takeTurn('function')).to.equal("incorrect!");
    expect(round.takeTurn('mutator method')).to.equal("correct!");
  });

  it('should calculate the percentage of correct answers', function() {
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');
    round.calculatePercentCorrect();
    expect(round.percent).to.equal(67);
  });

  it('should calculate how much time it took to complete the round',
    function() {
      round.startTime = 10;
      round.calculatePercentCorrect();
      expect(round.findTime()).to.equal((round.endTime - round.startTime)
      / 1000);
    });

  it('should restart the game if the user got less than 90%', function() {
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');
    round.calculatePercentCorrect();
    expect(round.turns).to.equal(0);
  });

  it('should have the user retry any questions they got wrong if the user got' +
  ' more than 90%', function() {
    round.incorrectGuesses = [card3, card2, card1];
    round.retryIncorrect();
    expect(round.deck.cards).to.equal(round.incorrectGuesses);
  });

});

const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const data = require('../src/data');

describe('Turn', function() {

  let card;
  let turn;

  beforeEach(function () {
    card = new Card(data.prototypeData[0]);
    turn = new Turn('array', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    expect(turn.guess).to.equal('array');
  });

  it('should store the card in play', function() {
    expect(turn.cardInfo).to.equal(card);
  });

  it('should be able to return the player\'s guess', function() {
    expect(turn.returnGuess()).to.equal('array');
  });

  it('should be able to return the card in play', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  describe('evaluateGuess()', function() {

    it('should evaluate if the player\'s guess is incorrect', function() {
      expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should record that the player\'s guess is incorrect', function() {
      turn.evaluateGuess();
      expect(turn.correct).to.equal(false);
    });

    it('should evaluate if the player\'s guess is correct', function() {
      turn.guess = 'object';
      expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should record that the player\'s guess is correct', function() {
      turn.guess = 'object';
      turn.evaluateGuess();
      expect(turn.correct).to.equal(true);
    });
  });

  describe('giveFeedback()', function() {

    it('should give feedback if the player\'s guess is incorrect', function() {
      turn.evaluateGuess();
      expect(turn.giveFeedback()).to.equal("incorrect!");
    });

    it('should give feedback if the player\'s guess is correct', function() {
      turn.guess = 'object';
      turn.evaluateGuess();
      expect(turn.giveFeedback()).to.equal("correct!");
    });
  });
});

const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card;
  let turn;

  beforeEach(function () {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    expect(turn.guess).to.equal('pug');
  });

  it('should store the card in play', function() {
    expect(turn.cardInfo).to.equal(card);
  });

  it('should be able to return the player\'s guess', function() {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should be able to return the card in play', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to return the card in play', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate the player\'s guess', function() {
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.correct).to.equal(false);
    turn.guess = 'sea otter';
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.correct).to.equal(true);
  });

  it('should be able to give feedback about the player\'s guess', function() {
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal("incorrect!");
    turn.guess = 'sea otter';
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal("correct!");
  });

});

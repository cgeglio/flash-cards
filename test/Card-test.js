const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const data = require('../src/data');

describe('Card', function() {

  let cardInfo;
  let card;

  beforeEach(function () {
    cardInfo = data.prototypeData[0];
    card = new Card(cardInfo);
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store an id', function() {
    expect(card.id).to.equal(1);
  });

  it('should store a question', function() {
    expect(card.question).to.equal("What allows you to define a set of " +
     "related information using key-value pairs?");
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('object');
  });
});

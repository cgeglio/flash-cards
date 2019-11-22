const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');

describe('Deck', function() {

  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(function () {
    card1 = new Card(data.prototypeData[0]);
    card2 = new Card(data.prototypeData[1]);
    card3 = new Card(data.prototypeData[2]);
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count the number of cards its storing', function() {
    expect(deck.countCards()).to.equal(3);
  });

});

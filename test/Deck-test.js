const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter',
      'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix',
      'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William',
      'Fitzgerald'], 'Fitzgerald');
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
    expect(deck.cards[2]).to.deep.equal({ id: 12, question: "What is Travis's\
     middle name?", answers: [ 'Lex', 'William', 'Fitzgerald' ], correctAnswer:
      'Fitzgerald'
    });
  });

  it('should be able to count the number of cards its storing', function() {
    expect(deck.countCards()).to.equal(3);
    let card4 = new Card(2, 'x', ['y', 'z'], 'y');
    deck = new Deck([card1, card2, card3, card4]);
    expect(deck.countCards()).to.equal(4);
  });

});

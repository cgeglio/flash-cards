const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
// const Card = require('../src/Card');
const Deck = require('../src/Deck');
// const Round = require('../src/Round');

describe('Game', function() {

  let game;
  // let card1;
  // let card2;
  // let card3;
  // let deck;
  // let round;

  beforeEach(function () {
    // card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    // card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    // deck = new Deck([card1, card2, card3]);
    // round = new Round([deck]);
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create cards at the start of each game', function() {
    game.start();
    expect(game.cards.length).to.equal(30);
  });

  it('should put cards in a new deck at the start of each game', function() {
    game.start();
    expect(game.deck.cards.length).to.equal(30);
  });

  it('should create a new round at the start of each game', function() {
    game.start();
    expect(game.currentRound.deck).to.equal(game.deck);
    expect(game.currentRound.turns).to.equal(0);
  });

});

const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  let game;

  beforeEach(function () {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should be able to store cards but start off with no cards', function() {
    expect(game.cards).to.deep.equal([]);
  });

  it('should be able to store a deck but start off with no deck', function() {
    expect(game.deck).to.deep.equal([]);
  });

  it('should create cards at the start of each game', function() {
    game.start();
    expect(game.cards.length).to.equal(30);
  });

  it('should put cards in a new deck at the start of each game', function() {
    game.start();
    expect(game.deck.cards.length).to.equal(30);
  });

  it('should create and store a new round at the start of each game',
    function() {
      game.start();
      expect(game.currentRound.deck).to.equal(game.deck);
    });

});

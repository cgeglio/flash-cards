const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;


  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter',
      'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix',
      'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William',
      'Fitzgerald'], 'Fitzgerald');
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
      round.takeTurn('capybara');
      expect(round.turns).to.equal(1);
      round.takeTurn('sea otter');
      expect(round.turns).to.equal(2);
    });

  it('should shift the current card to the next card in the deck when a player\
   takes a turn', function() {
    round.takeTurn('capybara');
    expect(round.currentCard).to.equal(card2);
    round.takeTurn('sea otter');
    expect(round.currentCard).to.equal(card3);
  });

  it('should shift the current card to the next card in the deck when a player\
   takes a turn', function() {
    round.takeTurn('capybara');
    expect(round.currentCard).to.equal(card2);
    round.takeTurn('sea otter');
    expect(round.currentCard).to.equal(card3);
  });

  it('should store each of the player\'s incorrect guesses', function() {
    round.takeTurn('capybara');
    expect(round.incorrectGuesses[0]).to.equal(card1);
    round.takeTurn('appendix');
    expect(round.incorrectGuesses[1]).to.equal(card2);
  });

  it('should return feedback based on guesses', function() {
    expect(round.takeTurn('sea otter')).to.equal("correct!");
    expect(round.takeTurn('spleen')).to.equal("incorrect!");
    expect(round.takeTurn('Fitzgerald')).to.equal("correct!");
  });

  it('should calculate the percentage of correct answers', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('Fitzgerald');
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
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('Fitzgerald');
    round.calculatePercentCorrect();
    expect(round.turns).to.equal(0);
  });

  it('should have the user retry any questions they got wrong if the user got more than 90%', function() {
    round.incorrectGuesses = [card3, card2, card1];
    round.retryIncorrect();
    expect(round.deck.cards).to.equal(round.incorrectGuesses);
  });

});

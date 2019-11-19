const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');


describe('Card', function() {

  let card;
  let turn;

  beforeEach(function () {
    card = new Card(new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');)
    turn = new Turn('pug', card);
  });
});

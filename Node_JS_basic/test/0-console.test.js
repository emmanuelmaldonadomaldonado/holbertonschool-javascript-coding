// test/0-console.test.js

const { expect } = require('chai'); // Importa expect desde Chai
const sinon = require('sinon');
const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('should display the message', () => {
    const message = 'Hello NodeJS!';
    const consoleSpy = sinon.spy(console, 'log');

    displayMessage(message);

    expect(consoleSpy.calledWith(message)).to.be.true; // Usa expect en lugar de assert
    consoleSpy.restore();
  });
});

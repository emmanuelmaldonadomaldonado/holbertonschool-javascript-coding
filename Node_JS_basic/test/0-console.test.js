const { expect } = require('chai');
const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('should print the correct message', () => {
    const message = 'Hello NodeJS!';
    let output = '';
    const storeLog = (inputs) => {
      output += inputs;
    };
    console.log = storeLog;
    displayMessage(message);
    expect(output).to.equal(`${message}\n`); // Corregir el uso de template literals
  });
});

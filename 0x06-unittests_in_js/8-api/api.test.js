const { expect } = require("chai");
const request = require('request');

describe('test GET /', () => {
  it('should return correct message in response', (done) => {
    const options = {
      url: 'http://localhost:7865',
      method: 'GET',
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

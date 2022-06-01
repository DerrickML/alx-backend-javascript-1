const { expect } = require('chai');

const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('should return exact response from api', (done) => {
    getPaymentTokenFromApi(true)
      .then((response) => {
        expect(response).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
});

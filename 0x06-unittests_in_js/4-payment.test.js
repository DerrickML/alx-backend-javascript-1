const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  const spy = sinon.spy(console, 'log');
  it('should call calculateNumber() with exact arguments', () => {
    const calcStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(calcStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcStub.alwaysReturned(10)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;

    calcStub.restore();
    spy.restore();
  });
});

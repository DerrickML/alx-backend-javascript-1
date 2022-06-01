const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  const utilsSpy = sinon.spy(Utils, 'calculateNumber');
  it('should call calculateNumber() once with exact arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utilsSpy.calledOnce).to.be.true;
    expect(utilsSpy.calledWith('SUM', 100, 20)).to.be.true;
    utilsSpy.restore();
  });
});
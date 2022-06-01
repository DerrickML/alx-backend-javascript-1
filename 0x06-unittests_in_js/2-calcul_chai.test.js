const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe('calculateNumber() - SUM', () => {
  it('should return 4 after adding 1 and 3', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return 5 after adding 1 and 3.7', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should return 5 after adding 1.2 and 3.7', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('should return 6 after adding 1.5 and 3.7', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should return -3 after adding -1.0 and -2', () => {
    expect(calculateNumber('SUM', -1.0, -2)).to.equal(-3);
  });
});

describe('calculateNumber() - SUBTRACT', () => {
  it('should return -4 after subtracting 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('should return 5 after subtracting 10 and 5', () => {
    expect(calculateNumber('SUBTRACT', 10, 5)).to.equal(5);
  });
  it('should return -3 after subtracting 1.2 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });
  it('should return -1 after subtracting -1.0 and -2', () => {
    expect(calculateNumber('SUBTRACT', -1.0, -2)).to.equal(1);
  });
});

describe('calculateNumber() - DIVIDE', () => {
  it('should return 0.2 after dividing 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('should return 2 after dividing 10 and 5', () => {
    expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
  });
  it("should return 'Error' after dividing 1.2 and 0", () => {
    expect(calculateNumber('DIVIDE', 1.2, 0)).to.equal('Error');
  });
  it('should return 0.5 after dividing -1.0 and -2', () => {
    expect(calculateNumber('DIVIDE', -1.0, -2)).to.equal(0.5);
  });
});

const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber() - SUM', () => {
  it('should return 4 after adding 1 and 3', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('should return 5 after adding 1 and 3.7', () => {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('should return 5 after adding 1.2 and 3.7', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('should return 6 after adding 1.5 and 3.7', () => {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should return -3 after adding -1.0 and -2', () => {
    assert.equal(calculateNumber('SUM', -1.0, -2), -3);
  });
});

describe('calculateNumber() - SUBTRACT', () => {
  it('should return -4 after subtracting 1.4 and 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should return 5 after subtracting 10 and 5', () => {
    assert.equal(calculateNumber('SUBTRACT', 10, 5), 5);
  });
  it('should return -3 after subtracting 1.2 and 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  it('should return -1 after subtracting -1.0 and -2', () => {
    assert.equal(calculateNumber('SUBTRACT', -1.0, -2), 1);
  });
});

describe('calculateNumber() - DIVIDE', () => {
  it('should return 0.2 after dividing 1.4 and 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should return 2 after dividing 10 and 5', () => {
    assert.equal(calculateNumber('DIVIDE', 10, 5), 2);
  });
  it("should return 'Error' after dividing 1.2 and 0", () => {
    assert.equal(calculateNumber('DIVIDE', 1.2, 0), 'Error');
  });
  it('should return 0.5 after dividing -1.0 and -2', () => {
    assert.equal(calculateNumber('DIVIDE', -1.0, -2), 0.5);
  });
});

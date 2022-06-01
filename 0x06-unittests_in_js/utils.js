const Utils = {
  calculateNumber(type, a, b) {
    const d = Math.round(a);
    const e = Math.round(b);
  
    if (type === 'SUM') {
      return d + e;
    }
    if (type === 'SUBTRACT') {
      return d - e;
    }
    if (type === 'DIVIDE') {
      if (e === 0) {
        return 'Error';
      }
      return d / e;
    }
  },
};
  
module.exports = Utils;
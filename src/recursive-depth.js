module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    return (
      1 + arr.reduce((acc, cur) => Math.max(this.calculateDepth(cur), acc), 0)
    );
  }
};

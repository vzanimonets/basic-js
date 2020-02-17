const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  let num = parseFloat(sampleActivity);
  if (
    Number.isNaN(num) ||
    typeof sampleActivity !== "string" ||
    num <= 0 ||
    num > 15
  ) {
    return false;
  } else {
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / num) / K);
    return t;
  }
};

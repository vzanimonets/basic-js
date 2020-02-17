module.exports = function countCats(backyard) {
  return backyard.reduce((count, e) => {
    return (count += e.filter(e => e == "^^").length);
  }, 0);
};

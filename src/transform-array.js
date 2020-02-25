module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error();

  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      i++;
    } else if (arr[i] === "--discard-prev") {
      resultArr.pop();
    } else if (arr[i] === "--double-next") {
      resultArr.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev") {
      resultArr.push(arr[i - 1]);
    } else {
      resultArr.push(arr[i]);
    }
  }

  return resultArr.filter(e => e !== undefined);
};

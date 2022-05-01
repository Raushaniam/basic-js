const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = [];
  let str = n.toString();
  let str1 = '';
  let str2 = '';
  let num = '';
  result.push(str.slice(0, str.length - 1));
  result.push(str.slice(1, str.length));
  for (let i = 0; i < str.length - 1; i++) {
    if (str.length === 3) {
      str1 = str.slice(i, i + 1);
      str2 = str.slice(i + 2);
      result.push(str1 + str2);
      break;
    }
    if (str.length > 3) {
      str1 = str.slice(0, i + 1);
      str2 = str.slice(i + 2, str.length);
      num = str1 + str2;
      result.push(num);
    }
  }
  result.sort().reverse();
  return Number(result[0]);
}

module.exports = {
  deleteDigit
};

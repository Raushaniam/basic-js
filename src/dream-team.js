const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  let result = '';
  let arrResult = [];
  if (Array.isArray(members) === true && members.length > 0) {
    members.forEach((item) => {
      if (typeof item === 'string') {
        arr.push(item.trim());
      }
    })
  } else {
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];
    let firstName = name.slice(0, 1);
    arrResult.push(firstName.toUpperCase());
  }
  arrResult.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
  result = arrResult.join('');
  return result;
}

module.exports = {
  createDreamTeam
};

/**
 * 
 * @param {Array} list 
 * @returns {number}
 */
function longerthan25(list) {
  let amount = 0;
  for (element in list) {
    if (list[element].length > 25) {
      amount++;
    }
  }
  return amount;
}
/**
 * 
 * @param {number} base 
 * @param {number} power 
 * @returns {number}
 */
function exponentiation(base,power) {
    if(power==0){
        return 1;
    }
    if(power<0){
        throw Error('BudgetWasNotEnoughForthis');
    }
    let result = base;
    for (let i = 1; i < power; i++) {
        result*=base;
    }
    return result;
}

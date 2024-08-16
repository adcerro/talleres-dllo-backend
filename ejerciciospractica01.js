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
/**
 * 
 * @param {*} object 
 * @param {Array} list 
 * @returns {number}
 */
function instancesinlist(object,list){
    let amount = 0;
    for(index in list){
        if(list[index]===object){
            amount++;
        }
    }
    return amount;
}
/**
 * 
 * @param {number} n 
 * @returns {number}
 */
function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    arr = [0,1]
    for (let index = 1; index < n; index++) {
        arr.push(arr[index]+arr[index-1]);
    }
    return arr[arr.length-1];
}
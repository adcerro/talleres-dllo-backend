/**
 * Function to find the lowest number in a list.
 * @param {Object} list A list of numbers.
 * @returns {number} The lowest value in the list.
 */
function findMin(list){
    let min = list[0];
    if(list.length==1){
        return min;
    }
    for (let index = 1; index < list.length; index++) {
        if(list[index]<min){
            min = list[index];
        }
    }
    return min;
}
/**
 * Punto 1.
 * @param {Object} list A list of numbers.
 * @returns {number} The highest value in the list.
 */
function findMax(list){
    let max = list[0];
    if(list.length==1){
        return max;
    }
    for (let index = 1; index < list.length; index++) {
        if(list[index]>max){
            max = list[index];
        }
    }
    return max;
}
/**
 * Punto 2.
 * @param {Object} list A list of numbers.
 * @param {Number} number The number you are looking for.
 * @returns {Boolean} Returns True if the number is in the list.
 */
function includes(list,number){
    for(index in list){
        if(list[index]===number){
            return true;
        }
    }
    return false;
}
/**
 * Punto 3.
 * @param {Object} list A list of numbers.
 * @returns {Number} The sum of all the numbers in the list.
 */
function sum(list){
    return list.reduce((a,b)=>a+b,0);
}

/**
 * Punto 4.
 * Get a list of numbers in between the highest and lowest
 * numbers of the list without including the numbers that are
 * already on the list.
 * @param {Object} list A list of numbers.
 * @returns {Object} A list of the numbers
 */
function missingNumbers(list){
    let min = findMin(list);
    let max = findMax(list);
    let numbers = [];
    for (let index = min+1; index < max; index++) {
        if(!includes(list,index)){
            numbers.push(index);
        }
    }
    return numbers;
}
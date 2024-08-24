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
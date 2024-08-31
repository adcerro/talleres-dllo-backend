/**
 * 
 * @param {String} letra Una letra.
 * @returns {Boolean} True si es vocal.
 */
function esVocal(letra){
    return /(a|e|i|o|u)/i.test(letra);
}
/**
 * Punto 1.
 * @param {String} string El texto.
 * @param {String} voc vocales o consonantes.
 * @returns {Number} El numero de vocales o consonantes en el string.
 */
function desglosarString(string,voc="vocales"){
    if(string.length===0){
        return 0;
    }
    if(voc==="vocales"){
        return string.split("").filter(esVocal).length;
    }
    if(voc==="consonantes"){
        return string.split("").filter((letra)=>!esVocal(letra)).length;
    }
}
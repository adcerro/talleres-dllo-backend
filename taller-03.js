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
function twoSum(lista,numero){
    if(lista.length < 2){
        throw new Error("Why?");
    }
    let pares = [];
    for(let baseindex = 0;baseindex<lista.length-1;baseindex++){
        for (let secondindex = 0; secondindex < lista.length-1; secondindex++) {
            if(lista[baseindex]+lista[secondindex]===numero){
                pares.push([baseindex,secondindex]);
            }
        }
    }
    return pares;
}
function esNumeroRomano(texto){
    return !/[^IVXLCDM]/.test(texto);
}
function romanoAdecimal(numero){
    switch (numero) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            return 0;
    }
}
function conversionRomana(numero){
    if(!esNumeroRomano(numero)){
        throw new Error("No es número romano");
    }
}
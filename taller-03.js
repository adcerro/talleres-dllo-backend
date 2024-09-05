/**
 * Evalua si una letra es una vocal.
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
/**
 * Punto 2.
 * @param {Object} lista Una lista con números.
 * @param {Number} numero Un número.
 * @returns {Object} Una lista con un par de indices.
 */
function twoSum(lista,numero){
    if(lista.length < 2){
        throw new Error("Tamaño de lista insuficiente.");
    }
    for(let baseindex = 0;baseindex<lista.length-1;baseindex++){
        for (let secondindex = baseindex+1; secondindex < lista.length; secondindex++) {
            if(lista[baseindex]+lista[secondindex]===numero){
                return [baseindex,secondindex];
            }
        }
    }
    return [];
}
/**
 * Checkeo case-sensitive de si un string es un número
 * romano válido (solo contiene los caracteres permitidos).
 * @param {String} texto La cadena que representa el número.
 * @returns {Boolean} True si solo hay caracteres de los números romanos.
 */
function esNumeroRomano(texto){
    return !/[^IVXLCDM]/.test(texto);
}
/**
 * Conversor de caracter (número romano) a número arábigo.
 * 
 * En caso de recibir más de un caracter o algo inválido
 * retorna 0.
 * @param {String} numero El caracter (número romano válido).
 * @returns {Number} El número arábigo
 */
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
/**
 * Punto 3
 * @param {String} numero Un número romano.
 * @returns {Number} El equivalente en cifras arábigas.
 */
function conversionRomana(numero){
    if(!esNumeroRomano(numero)){
        throw new Error("No es número romano");
    }
    if(numero.length === 1){
        return romanoAdecimal(numero);
    }
    let resultado = 0;
    for (let index = 0; index < numero.length-1; index++) {
        let numeroActual = romanoAdecimal(numero[index]);
        let siguienteNumero = romanoAdecimal(numero[index+1]);
        if(numeroActual<siguienteNumero){
            resultado-= numeroActual;
        }else{
            resultado+= numeroActual;
        }
    }
    resultado += romanoAdecimal(numero[numero.length-1]);
    return resultado;
}
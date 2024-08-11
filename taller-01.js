// Punto 1
function convertidorTemp(cent){
	return cent*(9/5)+32;
}
// Punto 2
/**
 * Calcula uno de los resultados de aplicar la ecuación
 * cuadrática a los parámetros a, b y c.
 * 
 * @param {number} a valor de a.
 * @param {number} b valor de b.
 * @param {number} c valor de c.
 * @param {boolean} resuma true para obtener el valor de la ecuación usando suma, false para usar resta.
 * @returns {number} El resultado de la formula cuadrática.
 */
function resolvedor(a,b,c,resuma=true){
	let raiz = (b**2-4*a*c)**(1/2);
	if (resuma==true) {
		return (-b+raiz)/(2*a);
	}else{
		return (-b-raiz)/(2*a);
	}
}
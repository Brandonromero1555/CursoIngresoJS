function mostrar()
{
	let numero;
	let min = 1;
	let max = 10;

	numero = Math.floor(Math.random()* (max - min + 1)) + min;
	
	alert(numero);


}//FIN DE LA FUNCIÓN

// Math.floor me redondea al numero para abajo
// Math.ceil me redondea al numero para arriba
// Math.round me redondea al numero para arriba o para abajo segun la coma


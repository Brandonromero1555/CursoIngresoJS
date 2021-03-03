/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let acumulador;
	let respuesta;
	let max;
	let min;

	do {
		numero = parseInt(prompt("ingrese un numero: "));
	 while (isNaN(numero)){ 
		numero = parseInt(prompt("eso no es un numero, ingrese un numero:"));
	 }
    
     

    }while(condicion);

}//FIN DE LA FUNCIÓN
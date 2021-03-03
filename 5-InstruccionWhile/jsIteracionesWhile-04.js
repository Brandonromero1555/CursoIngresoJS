/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero
	
	numero = parseInt(prompt("ingrese un numero entre el 0 y el 9:"));

                                      //isNaN(numero) == true
    while(numero < 0 || numero >9 || isNaN(numero)){
		
		numero = parseInt(prompt("numero invalido, ingrese numero entre el 0 y el 9:"));
	}
	document.getElementById("txtIdNumero").value = numero;

}//FIN DE LA FUNCIÓN
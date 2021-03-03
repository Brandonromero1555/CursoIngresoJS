/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let respuesta;
	let acumulador = 0;
	let contador = 0;
	do {
		numero = parseInt(prompt("ingrese un numero: "));
		acumulador += numero;
		contador++;
		respuesta = prompt("desea ingresar otro numero? si/no");
	} while (respuesta == "si");
	
	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
//cuando conocemos la cantidad de repeticiones en tiempo de compilacion usar for (recomendacion)
//cuando no se conoce la cantidad de repeticiones utilizar while(recomendacion)
//cuando no se conoce la cantidad de repeticiones pero quiero que se repita por lo menos una vez utilizar do while(recomendacion)
}//FIN DE LA FUNCIÓN
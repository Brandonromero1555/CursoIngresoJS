function mostrar()
{
	let numero;
	let acumulador = 0; //acumulador valores variables
	let promedio;
	let x = 0; //contador valores fijos
	while(x < 5){ 
        numero = parseInt(prompt("ingrese un numero: "));
	    acumulador += numero;
		x++;
    }
	promedio = acumulador / 5;
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
//cuando conocemos la cantidad de repeticiones en tiempo de compilacion usar for (recomendacion)
//cuando no se conoce la cantidad de repeticiones utilizar while(recomendacion)

}//FIN DE LA FUNCIÓN
  
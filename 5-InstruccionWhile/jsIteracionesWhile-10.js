/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let respuesta;
	let acumN = 0;
	let acumP = 0;
	let contP = 0;
	let contN = 0
	let contCeros = 0
	let contPares = 0
	let promP = 0;
	let promN = 0;
	let diferencia;

	do {
		numero = parseInt(prompt("ingrese un numero:"));
		while( isNaN(numero)){

		 numero = parseInt(prompt("eso no es un numero, ingrese un numero:"));
		}

		if( numero > 0){
			acumP += numero;
			contP++;
		}
		else if(numero < 0){
			acumN += numero;
			contN++;
		}
		else{
			contCeros++;
		}

		if(numero % 2 == 0){
			contPares++;
		}
		

		respuesta = prompt("quiere ingresar otro numero?");
	} while (respuesta == "si");
	
	if( contP != 0){ 
	promP = acumP / contP;
	}
	if( contN != 0){ 
	promN = acumN / contN;
    }
	diferencia = contP - contN;


	document.write("1-Suma de los negativos: " + acumN + "<br>");
	document.write("2-Suma de los positivos: " + acumP + "<br>");
	document.write("3-Cantidad de positivos: " + contP + "<br>");
	document.write("4-Cantidad de negativos: " + contN + "<br>");
	document.write("5-Cantidad de ceros: " + contCeros + "<br>");
	document.write("6-Cantidad de números pares: " + contPares + "<br>");
	document.write("7-Promedio de positivos: " + promP + "<br>");
	document.write("8-Promedios de negativos: " + promN + "<br>");
	document.write("Diferencia entre positivos y negativos: " + diferencia + "<br>");

}//FIN DE LA FUNCIÓN


//while (respuesta != "si" && respuesta != "no"){
//	respuesta = prompt("por favor responder con si o no");
//}

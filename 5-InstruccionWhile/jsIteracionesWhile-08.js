/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{ 
	let numero;
	let acumuladorP = 0;
	let acumuladorN = 1;
	let respuesta;
	let flag = 1;
	
	
	do {
		numero = parseInt(prompt("ingrese un numero: "));
	 while (isNaN(numero)){
		numero = parseInt(prompt("eso no es un numero, ingrese un numero:"));
	 }
	if (numero >= 0) {
		acumuladorP += numero;
		
	} else { (numero < 0 )
		acumuladorN *= numero;
		flag = 0;
	}


		 respuesta = prompt("desea ingresar otro numero? si/no");
        
	} while (respuesta == "si");
	
	if(flag){
		acumuladorN = 0;
	}

	document.getElementById("txtIdSuma").value = acumuladorP;
	document.getElementById("txtIdProducto").value = acumuladorN;

}//FIN DE LA FUNCIÓN
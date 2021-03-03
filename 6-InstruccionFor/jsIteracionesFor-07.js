function mostrar()
{
	let numero;
	let contDiv = 0;
	
	numero = parseInt(prompt("ingresar un numero:"));
	for (let i = 1; i <= numero ; i++) {
		
		if(numero % i == 0) {
		  
			contDiv++;
		}

	}
	
	alert("cantidad de divisores " + contDiv)


}//FIN DE LA FUNCIÓN
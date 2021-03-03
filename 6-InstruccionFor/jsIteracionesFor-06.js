function mostrar()
{
	let numero;
	let contPares = 0;
	
	numero = parseInt(prompt("ingresar un numero:"));
	for (let i = 1; i <= numero ; i++) {
		
		if(i % 2 == 0){
		  
			contPares++;
		}

	}
	
	alert("cantidad de pares " + contPares)

}//FIN DE LA FUNCIÓN
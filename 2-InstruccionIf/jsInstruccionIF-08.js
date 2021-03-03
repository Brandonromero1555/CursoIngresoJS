function mostrar()
{
	let edad;
	let ECivil;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	ECivil = document.getElementById("estadoCivil").value;
	
	// es soltero y no es menor
	if (ECivil == "Soltero" && edad >= 18) {

		alert("Es soltero y no es menor.");
	}



}//FIN DE LA FUNCIÓN
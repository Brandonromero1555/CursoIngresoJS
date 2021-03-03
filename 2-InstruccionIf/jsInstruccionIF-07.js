function mostrar()
{   let edad;
	let ECivil;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	ECivil = document.getElementById("estadoCivil").value;
	
	// edad menor a 18 años y un estado civil distinto a "Soltero"
	if (edad < 18 && ECivil != "Soltero"){

		alert("Es muy pequeño para NO ser soltero.");
	}
	
	


}//FIN DE LA FUNCIÓN
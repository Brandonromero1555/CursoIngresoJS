function mostrar()
{
	let edad;
    
    edad = parseInt(document.getElementById("txtIdEdad").value);

    if(edad <= 12 || edad >= 18) {
	//(!(edad >= 13 && edad <= 17)) otra forma de hacerlo
	  
		alert("no es adolescente");
    }


}//FIN DE LA FUNCIÓN

// || y & estan explicadas sus funciones en el cuaderno
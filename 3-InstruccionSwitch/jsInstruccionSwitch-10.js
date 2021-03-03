function mostrar()
{
	let destino;
	let estacion;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
  
	switch (estacion) {
	  case "Invierno":
		  if( destino == "Bariloche")

		  alert("se viaja");
		  
		  else
		  alert("no se viaja");
		 
		   break;
	  case "Verano":
		  if(destino == "Mar del plata")
		  alert("se viaja");
		  else if(destino == "Cataratas")
		  alert("se viaja");
		  else {
			  alert("no se viaja");
		  }

		
		break;
	  case "Otoño":
		alert("se viaja");

	        break;
	  case "Primavera":
		if( destino == "Bariloche")

		alert("no se viaja");
		
		else
		alert("se viaja");
		    break;
	  }


}//FIN DE LA FUNCIÓN
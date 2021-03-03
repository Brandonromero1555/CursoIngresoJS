function mostrar()
{
	let mes; 
	
	mes = document.getElementById("txtIdMes").value;
	//switch no tiene condicion, usar mas que nada cuando solo usamos el operador ==
    //default es para cuando no se cumpla lo de los case
	switch( mes ){

		case "Enero":
			alert("Que comiences bien el año");
			break;
	    case "Marzo":
			alert("a clases!!");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!");
			break;
		/*default:
			alert("es algun otro mes");*/
	}

}//FIN DE LA FUNCIÓN

/* let mes; 
	
	mes = document.getElementById("txtIdMes").value;
	
	if( mes == "Enero"){
        alert("Que comiences bien el año!!");
	}   else if( mes == "Marzo"){
        alert("A clases!!");
    }   else if( mes == "Julio"){
		alert("Se vienen las vacaciones!!");
    }   else if( mes == "Diciembre"){
		alert("Felices fiestas!!");
	// } */
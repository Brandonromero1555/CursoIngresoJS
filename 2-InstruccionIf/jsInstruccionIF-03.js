function mostrar()
{
	let edad;
    
    edad = parseInt(document.getElementById("txtIdEdad").value);

    if(edad >= 18){
      
      alert("mayor de edad");
    }
    else{ //sirve para que haga lo contrario a lo que le pidas al if para no poner 2 veces if
  
      alert("menor de edad");   
    }

}//FIN DE LA FUNCIÓN
//cuando es una opcion o la otra solo utilizo un if junto al else

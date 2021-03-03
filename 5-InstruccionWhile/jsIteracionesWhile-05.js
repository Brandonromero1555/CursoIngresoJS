/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{ 
	let sexo; //toLowerCase para que te identifique las mayusculas y las minusculas
	sexo = prompt("ingrese su sexo, f o m:").toLowerCase();
	while(sexo != "f" && sexo != "m"){

		sexo = prompt("Error. Ingrese su sexo, f o m:").toLowerCase();
	}

	 document.getElementById("txtIdSexo").value = sexo;
}//FIN DE LA FUNCIÓN
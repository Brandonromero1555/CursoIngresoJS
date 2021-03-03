function mostrar()
{
	let mes; 
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
		alert("este mes tiene 28 dias");
		break;
		case "Enero":
		case "Abril":
		case "Junio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("tiene 30 dias");
		break;
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "septiembre":
		case "Noviembre":
		alert("tiene 31 dias");
		break;
	}
	



}//FIN DE LA FUNCIÓN
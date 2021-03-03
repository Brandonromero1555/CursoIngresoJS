/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado; //siempre declarar variables al principio
	
	nombreIngresado = document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);

}



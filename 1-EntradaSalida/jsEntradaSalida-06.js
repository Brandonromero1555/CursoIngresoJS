/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
    let suma;

//usar parseInt o parseFloat para pasar tipo string (osea texto) a number (osea numero)
	numero1 = parseFloat(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
    
    suma = numero1 + numero2;

    alert("la suma es " + suma);


}


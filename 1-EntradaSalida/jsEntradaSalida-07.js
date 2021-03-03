/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
   let numero1;
	let numero2;
    let suma;

//usar parseInt o parseFloat para pasar tipo string (osea texto) a number (osea numero)
	numero1 = parseFloat(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
    
    suma = numero1 + numero2;

    //la funcion toFixed sirve para reducir la cantidad de numeros que se muetras despues de la coma(.)

    alert("la suma es " + suma.toFixed(2));	
  

}

function restar()
{
	let numero1;
	let numero2;
    let resta;

//usar parseInt o parseFloat para pasar tipo string (osea texto) a number (osea numero)
	numero1 = parseFloat(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
    
    resta = numero1 - numero2;

    //la funcion toFixed sirve para reducir la cantidad de numeros que se muetras despues de la coma(.)

    alert("la resta es " + resta.toFixed(2));


}

function multiplicar()
{ 
	let numero1;
	let numero2;
    let multiplicar;

//usar parseInt o parseFloat para pasar tipo string (osea texto) a number (osea numero)
	numero1 = parseFloat(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
    
    multiplicar = numero1 * numero2;

    //la funcion toFixed sirve para reducir la cantidad de numeros que se muetras despues de la coma(.)

    alert("la multiplicacion es " + multiplicar.toFixed(2));


}

function dividir()
{
	let numero1;
	let numero2;
    let dividir;

//usar parseInt o parseFloat para pasar tipo string (osea texto) a number (osea numero)
	numero1 = parseFloat(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseFloat(document.getElementById("txtIdNumeroDos").value);
    
    dividir = numero1 / numero2;
    
    //la funcion toFixed sirve para reducir la cantidad de numeros que se muetras despues de la coma(.)

    alert("la divicion es " + dividir.toFixed(2));

}


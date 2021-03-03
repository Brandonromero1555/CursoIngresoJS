/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{

	let nombre;
	let edad;
	let sexo;
	let respuesta;
	let temperatura;
	let estadoCivil;
	let flag = 1;
	let maxTemp;
	let maxNombre;
	let contMayoresViudos = 0;
	let contHombreSolteroViudo = 0;
	let contViejoConFiebre = 0;
	let acumEdadHombresSolteros = 0;
	let contHombreSolteros = 0;
	let promedio;

	do {
		nombre = prompt("ingrese nombre");
		edad = parseInt(prompt("ingrese edad"));
		while(edad <= 0 || isNaN(edad)){
			edad = parseInt(prompt("error al ingresar edad"));
		}
		sexo = prompt("ingrese sexo f/m");
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("eror al ingresar sexo, ingrese sexo f/m");
		}

		estadoCivil = prompt("ingrese estado civil viudo/soltero/casado");
		while(estadoCivil != "viudo" && estadoCivil != "soltero" && estadoCivil != "casado"){
			estadoCivil = prompt("eror al ingresar estado civil, ingrese estado civil viudo/soltero/casado");
		}
		temperatura = parseFloat(prompt("ingrese temperatura"));
		while(temperatura <= 0 || isNaN(temperatura)){
			temperatura = parseFloat(prompt("error al ingresar temperatura, ingrese temperatura"));
		}
		
		//punto a
		if(flag || temperatura > maxTemp){ 
			maxTemp = temperatura;
			maxNombre = nombre;
			flag = 0;
		}

		// punto b
		if(edad >= 18  && estadoCivil == "viudo"){
			contMayoresViudos++;
		}

		// punto c
		if( sexo == "m" && estadoCivil != "casado"){
			contHombreSolteroViudo++;
		}

		//punto d
		if (edad > 60 && temperatura > 38){
			contViejoConFiebre++;
		}

		//punto e
		if (sexo == "m" && estadoCivil == "soltero") {
			acumEdadHombresSolteros += edad;
			contHombreSolteros++;
			
		}


		respuesta = prompt("quiere ingresar otro pasajero? ");
	} while (respuesta == "si");

	//mostrar los resultados
	console.log("A nombre persona con mas temperatura es " + maxNombre + " con temperatura " + maxTemp);
	console.log("B mayores viudos: " + contMayoresViudos);
	console.log("C hombres solteros y viudos " + contHombreSolteroViudo);
	console.log("D vIejos con mas de 38 de fiebre " + contViejoConFiebre);



	if( contHombreSolteros != 0){
		promedio = acumEdadHombresSolteros / contHombreSolteros;
		console.log("E promedio hombres solteros: " + promedio.toFixed(2));
	}
	else{
		console.log("E no se registraron hombres solteros");
	}



}

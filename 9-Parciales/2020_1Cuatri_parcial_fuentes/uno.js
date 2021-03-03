/* Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos  tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/
/*
let tipoMascota;
	let Pelaje;
	let edad;
	let nombre;
	let raza;
	let peso;
	let estado;
	let temperaruta;
	let respuesta;
	
	let flagPerro = 1;
	let maxPesoPerro;
	let contMascotas = 0;
	let contadorEnfermos = 0;
	let porcentajeEnfermos;
	
	let nombreUOtraCosa;

	let flagSinPelo = 1;
	let minTempSP;

	let acumTempPerro = 0;
	let acumTempGato = 0;
	let acumTempOtraCosa = 0;
	let contPerro = 0;
	let contGato = 0;
	let contOtraCosa = 0;
	let promedioTempPerro;
	let promedioTempGato;
	let promedioTempOtraCosa;
	let maxTipoPromedioTemp;

	let contInternados = 0;
	let contAdopcion = 0;
	let contadorEnfermos = 0;
	let estadoMenorCant;

	let acumPeso = 0;

	let flagGatoSinPelos = 1;
	let nombreGatoSPMinP;
	let razaGatoSPMinP;
	let PesoGSPMinP;



	do {
		tipoMascota = prompt("ingrese tipo: perro/gato/otro");

    while(tipoMascota != "perro" && tipo != "gato" && tipo != "otro"){
      tipoMascota = prompt("error, ingrese tipo perro/gato/otro:");
    }
    Pelaje = prompt("ingrese tipo pejale: corto/largo/pelado");

    while(Pelaje != "corto" && Pelaje != "largo" && Pelaje != "pelado"){
      tipo = prompt("error, ingrese tipo de pelaje:");
	}
	
	edad = parseInt(prompt("ingrese edad"));
		while(edad <= 0 || isNaN(edad)){
			edad = parseInt(prompt("error al ingresar edad"));
		}
	
	nombre = prompt("ingrese el nombre");
	while(isNaN(nombre) == false){
		nombre = prompt("el nombre no puede ser un numero, ingrese un nombre");
	}

	raza = prompt("ingrese la raza");
	while(isNaN(raza) == false){
		raza = prompt("la raza no puede ser un numero, ingrese la raza");
	}

	peso = parseFloat(prompt("ingrese peso"));
	while(peso <= 0 || isNaN(peso)){
		peso = parseFloat(prompt("error al ingresar peso, ingrese peso"));
	}

	temperatura = parseFloat(prompt("ingrese temperatura"));
		while(temperatura <= 0 || isNaN(temperatura)){
			temperatura = parseFloat(prompt("error al ingresar temperatura, ingrese temperatura"));
		}

		estado = prompt("ingrese estado  enfermo/adopcion/internado");
		while(estado != "enfermo" && estado != "adopcion" && estado != "internado"){
			estado = prompt("eror al ingresar estado , ingrese estado enfermo/adopcion/internado");
		}

		if(tipo == "perro" && (flagPerro || peso > maxPesoPerro)){
			maxPesoPerro = peso;
			flagPerro = 0;
		}

		contMascotas++;

		if(estado == "enfermo"){
			contadorEnfermos++;
		}

		if(tipoMascota == "otro"){
			nombreUOtraCosa = nombre;
		}
		
		if(pelaje == "pelado" && (flagSinPelo || temperaruta < minTempSP)){
			minTempSP = temperaruta;
			flagSinPelo = 0;
		}

		switch (tipoMascota) {
			case "perro":
				acumTempPerro += temperaruta;
				contPerro++;
				break;
			case "gato":
				acumTempGato += temperaruta;
				contGato++;
				break;
			case "otro":
				acumTempOtraCosa += temperaruta;
				contOtraCosa++;
				break;
		}

		switch (estado) {
			case "enfermo":
			
				contadorEnfermos++;
				break;
			case "adopcion":
				
				contAdopcion++;
				break;
			case "internado":
	
				contInternados++;
				break;
		}

		acumPeso += peso;

		if(tipoMascota == "gato" && (flagGatoSinPelos || peso < PesoGSPMinP)){

			PesoGSPMinP = nombre;
			flagGatoSinPelos = 0;

		}

	
		respuesta = prompt("quiere ingresar otra mascota:");
	} while (respuesta == "si");

	if(flagPerro = 1){
		console.log("no se ingresaron perros");
	}else{ 
	console.log("el perro mas pesado pesa" + maxPesoPerro + "kg y se llama " + nombre );
    }
	porcentajeEnfermos = contadorEnfermos / contMascotas;
	console.log("porcentaje de enfermos es " + porcentajeEnfermos);

	console.log("el ultimo nombre de mascota tipo otro es: " + nombreUOtraCosa);

	console.log("el animal sin pelo con menor temperatura es " + minTempSP);

*/

//pedir las variables
//generar un bucle de 5 veces(tipo, precio, cantidad, marca, fabricante)
//(utilizo for porque conozco la cantidad de repeticiones)

//a) del alcohol mas barato mostrar la cantidad de unidades y el fabricante
//b) del tipo con mas unidades el promedio por compra
//c) cantidad de jabones en total
function mostrar()
{
	let precio;
	let tipo;
	let cantidad;
	let respues;
	let marca;
	let fabricante;
	let acumBarbijo = 0;
	let acumJabon = 0;
	let acumAlcohol = 0;
	let contAlcohol = 0;
	let contBarbijos = 0;
	let contJabon = 0;
	let precioAlcoholBarato;
	let cantAlcoholBarato;
	let fabricanteAlcoholBarato;
	let promedioCompra;
	let mayorTipo;
	let flagAlcohol = 0;

 
	for (let i = 0; i < 5; i++) {
		tipo = prompt("ingrese tipo: barbijo/alcohol/jabon");
		while(isNaN(tipo) && tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon"){
			tipo = prompt("error al ingresar tipo, ingrese tipo: barbijo/alcohol/jabon");
		}	

		precio = parseInt(prompt("ingrese precio (100 - 300)"));
		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio = parseInt(prompt("error al ingresar precio, ingrese precio (100 - 300)"));

		}

		cantidad = parseInt(prompt("ingrese cantidad, maximo 1000U"));
		while(cantidad <= 0 && cantidad > 1000 && isNaN(cantidad)){
			cantidad = parseInt(prompt("error al ingresar cantidad, maximo 1000U"));
			
		}
		marca = prompt("ingrese marca");
		fabricante = prompt("ingrese fabricante");

		switch(tipo){
			case "barbijo":
				acumBarbijo += cantidad;
				contBarbijos++;

				break;
			case "alcohol":
				acumAlcohol += cantidad;
				contAlcohol++;
				if(flagAlcohol == 0 || precioAlcoholBarato > precio){ 
				precioAlcoholBarato = precio;
				cantAlcoholBarato = cantidad;
				fabricanteAlcoholBarato = fabricante;
				flagAlcohol = 1;
			    }
			
				break;
			case "jabon":
				acumJabon += cantidad;
				contJabon++;
				break;
		}

	}

	if(acumAlcohol > acumBarbijo && acumAlcohol > acumJabon){

		mayorTipo = "alcohol";
		promedioCompra = acumAlcohol / contAlcohol;	

	}else if(  acumBarbijo > acumAlcohol && acumBarbijo > acumJabon){
		
		mayorTipo = "barbijo";
		promedioCompra = acumBarbijo / contBarbijos;

	}else{

		mayorTipo = "jabon";
		promedioCompra = acumJabon / contJabon;
	}

	if(contAlcohol != 0){
		alert("fabricante alcohol barato " + fabricanteAlcoholBarato +
		"cantidad de alcohol barato " + cantAlcoholBarato);
	}else{
		alert("no se ingreso alcohol");
	}

	alert("tipo con mas unidades: " + mayorTipo + " promedio: " + promedioCompra.toFixed(2) +
	"unidades de jabon: " + acumJabon);

}

/*
do{
		tipo = prompt("ingrese tipo: Barbijo/Jabon/alcohol")

	 while (tipo != "Barbijo" && tipo != "jabon" && tipo != "alcohol"){
		tipo = prompt("error al ingresar tipo, ingrese tipo: Barbijo/Jabon/alcohol");
	}

	cantidad = parseInt(prompt("ingrese cantidad:"));
	while(isNaN(cantidad) || cantidad <= 0 || cantidad > 1000){
		cantidad = parseInt(prompt("error al ingresar cantidad, ingrese cantidad:"));
	}

	precio = parseInt(prompt("ingrese precio min 100 max 300"));
	while(isNaN(precio) || precio < 100 || precio > 300){
		precio = parseInt(prompt("error al ingresar precio, ingrese precio min 100 max 300"));
	}
	
	marca = prompt("ingrese marca:");
	while(isNaN(marca)){
		marca = prompt("error al ingresar marca, ingrese marca:");
	}

	fabricante = prompt("ingrese fabricante:");
	while(isNaN(fabricante)){
		fabricante = prompt("error al ingresar fabricante, ingrese fabricante:");
	}

	


 }while(respues == "si");


*/
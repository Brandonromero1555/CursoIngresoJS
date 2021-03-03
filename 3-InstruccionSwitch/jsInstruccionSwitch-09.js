function mostrar() {
  let estacion;
  let destino;
  let precioBase = 15000;
  let precioFinal;
  let aumento = 0;
  let descuento = 0;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
		if( destino == "Bariloche"){
		  aumento = precioBase * 20 / 100;

		}else if( destino == "Mar del plata"){
		   descuento = precioBase * 20 / 100;
			
		}
         else {
		   descuento = precioBase * 10 / 100;
		}
		 break;
    case "Verano":
        if( destino == "Bariloche"){
			descuento = precioBase * 20 / 100;
 
		 }else if( destino == "Mar del plata"){
			aumento = precioBase * 20 / 100;
		 }
		  else {
			  aumento = precioBase * 10 / 100;
		 }
		  break;
    case "Otoño":
    case "Primavera":
		if(destino == "Cordoba"){
           precioFinal = precioBase;
		} else{
			aumento = precioBase * 10 / 100;
		}
	   break;
    }
  precioFinal = precioBase + aumento - descuento;
alert("el precio final es " + precioFinal);


} //FIN DE LA FUNCIÓN

//estrategia de resolucion
// 1- definir variables
// 2- relevar los datos de entrada (estacion y destino)
// 3- definir un ambito para cada estacion
// 4- dntro de cada ambito del punto anterior definir un ambito para cada destino
// 5- calcular precio final
// 6- informar precio final

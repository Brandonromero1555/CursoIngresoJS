function mostrar()
{
  let precio;
  let cantidad;
  let importe;
  let subTotal = 0;
  let respuesta;
  let acumC = 0;
  let acumCa = 0;
  let acumA = 0
  let acumBolsas = 0;
  let descuento;
  let neto;
  let maxPrecio;
  let maxTipo;
  let flag = 1;
  let tipoMaxBolsas;

  do {
    tipo = prompt("ingrese tipo: cal/arena/cemento");

    while(tipo != "cal" && tipo != "cemento" && tipo != "arena"){
      tipo = prompt("error, ingrese tipo cal/arena/cemento:");
    }
     
    cantidad = parseInt(prompt("ingrese cantidad: "));
    while(isNaN(cantidad) || cantidad <= 0){
   
      cantidad = parseInt(prompt("error al ingresar cantidad"));
    }

    precio = parseInt(prompt("ingrese precio: "));
    while(isNaN(precio) || precio <= 0){
   
      precio = parseInt(prompt("error al ingresar precio"));
    }

    importe = precio * cantidad;
    subTotal += importe;
    acumBolsas += cantidad;
    
    switch (tipo) {
      case "arena":
        acumA += cantidad
        
        break;
      case "cal":
        acumCa += cantidad;
        break;
      case "cemento":
        acumC += cantidad;
        break;
      
    }


    if (flag || precio > maxPrecio) {
      
      maxPrecio = precio;
      maxTipo = tipo;
      flag = 0;

    }

    respuesta = prompt("quiere comprar algo mas?")
  } while (respuesta == "si");

  if( acumBolsas < 10){
    descuento = 0;
  }
  else if( acumBolsas < 30){
    descuento = 0.15;
  }
  else{
    descuento = 0.25;
  }

  if(acumA > acumC && acumA > acumCa){
    tipoMaxBolsas = "arena";

  }else if(acumC > acumA && acumC > acumCa){
    tipoMaxBolsas = "cemento";
  }else{
    tipoMaxBolsas = "cal";
  }

  console.log("a- importe bruto a pagar $" + subTotal);

  if(descuento != 0){
    neto = subTotal - subTotal * descuento;
    console.log("b- importe neto a pagar $" + neto);
  }

  console.log("d- el tipo con mas cantidad de bolsas es " + tipoMaxBolsas);

  console.log("f- el tipo mas caro es " + maxTipo + " con un valor de " + maxPrecio);



}
//estrategia
//1- declaracion d variables
//2- general bucle de tipo: hasta que el usuario quiera
//aca va el codigo que se ejecuta en cada iteracion
//3- pido el tipo (arena, cal, cemento)
//3.1- valido el tipo
//4- pido cantidadd
//4.1- valido cantidad
//5- pido precio
//5.1- valido precio
//6- acumulo cantidad
//7- calculo importe (precio * cantidad)
//acumulo el importeBruto
//genero un bloque por cada tipo:arena, cal, cemento (usar switch) y acumulo cantidad
//tengo que generar un bloque al que entro en la primer iteracio y otro en donde entro en las restantes
//en la primer iteracion guardo como mayor precio de este 
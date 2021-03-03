function mostrar()
{
	let nota;
	let max = 10;
	let min = 1;
	
 //si la nota es 9 o 10 alert exelente
 //si la nota es entre 8 o 4 alert aprobó
 //si la nota es menor a 4 alert "Vamos, la proxima se puede"

	nota = Math.floor(Math.random()* (max - min + 1)) + min;
   if( nota >= 9){
      alert(nota + " exelnte");
   }  else if( nota >= 4){
      alert(nota + " aprobó");
   }  else{
	  alert(nota + " Vamos, la proxima se puede");
   }

}//FIN DE LA FUNCIÓN
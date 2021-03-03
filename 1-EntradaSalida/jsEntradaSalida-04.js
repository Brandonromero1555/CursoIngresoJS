/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
   let nombre;
 
   nombre = prompt("su nombre");

  document.getElementById("txtIdNombre").value = nombre // siempre las cosas de la derecha son las que se ejecutan

}


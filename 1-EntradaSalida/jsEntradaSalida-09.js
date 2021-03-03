/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
     let sueldo;
     let aumento;
     let nuevoSueldo; 
    
     sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

     nuevoSueldo = sueldo + (sueldo * 0.1);
     
     (document.getElementById("txtIdResultado").value) = nuevoSueldo.toFixed(2);

     
}

/* datos que voy a necesitar siempre
de donde los obtengo
que hago con esos datos

1 identificar los datos y reservar espacio en la memoria palabra reservada (let)
2 conseguir el dato en el ejecicio de arriba por ejemplo seria el sueldo
3 hacer lo que me pide en este caso un aumento del 10%
4 calcular el nuevo sueldo
5 informar el nuevo sueldo*/
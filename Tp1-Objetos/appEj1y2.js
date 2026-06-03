//Ejercicio1: 
/*esta funcion muestra los datos ingresados por el usuario en el form,+ el objeto coche con sus propiedades y el metodo para la edad del auto
al hacer click en el boton */
function mostrarAuto() {

  //se obtienen los valores de cada input que ingresó el usuario
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const anio = document.getElementById("anio").value;
  const color = document.getElementById("color").value;
  const estado = document.getElementById("estado").value;
  const precio = document.getElementById("precio").value;

  //objeto coche con sus respectivas propiedades
const coche = {
  Marca: marca,
  Modelo: modelo,
  Anio: anio,
  Color: color,
  Estado: estado,
  Precio: precio,

  //Ejercicio2:
  //Metodo para calcular la edad del auto
  EdadCoche: function() {
    const fechaActual = new Date().getFullYear();
    return fechaActual - this.Anio;
  }
};
//se muestra en el HTML los datos ingresados por el usuario y la edad del auto
document.getElementById("respuesta").innerHTML=`<p>Marca:${coche.Marca}</p>
<p>Modelo: ${coche.Modelo}</p>
<p>Año: ${coche.Anio}</p>
<p>Color: ${coche.Color}</p>
<p>Estado: ${coche.Estado}</p>
<p>Precio: ${coche.Precio}</p>
<h3>Edad del vehículo: ${coche.EdadCoche()} años</h3>`; 
}

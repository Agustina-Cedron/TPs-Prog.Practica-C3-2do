// Array vacío para almacenar los empleados
const Empleado = [];

function mostrarEmpleado() {

  // Obtenemos los valores ingresados por el usuario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;
  const direccion = document.getElementById("direccion").value;
  const sueldoxms = document.getElementById("sueldoxms").value;
  const suelxhs = document.getElementById("suelxhs").value;
  const precioxhs = document.getElementById("precioxhs").value;

  // Creamos el objeto empleado con sus propiedades y métodos
  const empleado = {
    Nombre: nombre,
    Apellido: apellido,
    Dni: dni,
    Direccion: direccion,
    Sueldoxms: sueldoxms,
    SueldoPorHora: suelxhs,
    PrecioPorHora: precioxhs,

    // Método que calcula el salario multiplicando horas por precio
    SalarioXMes: function() {
      return this.SueldoPorHora * this.PrecioPorHora;
    }
  };

  // Agregamos el empleado al array
  Empleado.push(empleado);

  // Mostramos el array en la consola
  console.log(Empleado);

  // Mostramos los datos del empleado en el documento
  document.getElementById("respuesta").innerHTML =
    `<p>Nombre: ${empleado.Nombre}</p>
     <p>Apellido: ${empleado.Apellido}</p>
     <p>DNI: ${empleado.Dni}</p>
     <p>Direccion: ${empleado.Direccion}</p>
     <p>Sueldo por mes: ${empleado.Sueldoxms}</p>
     <p>Sueldo por hora: ${empleado.SueldoPorHora}</p>
     <p>Precio por hora: ${empleado.PrecioPorHora}</p>
     <p>Salario por mes: ${empleado.SalarioXMes()}</p>`;
}
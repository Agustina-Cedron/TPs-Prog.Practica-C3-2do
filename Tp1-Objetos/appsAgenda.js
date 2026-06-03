// Objeto Contacto con usuarios ya cargados
const Contactos = [
  {
    nombre:"Josefa",
    apellido:"Gomez",
    telefono:"3813345678",
    direccion:"Bernardo de Monteagudo 123",
    email:"josegomez@gmail.com",
  },
  {
    nombre:"Federico",
    apellido:"Perez",
    telefono:"3813567890",
    direccion:"San Martin 456",
    email:"federicoperez@gmail.com",
  },
  {
    nombre:"Lucia",
    apellido:"Lopez",
    telefono:"3813456789",
    direccion:"Belgrano 789",
    email:"lucia.lopez@gmail.com",
  }
];

// Mostramos los contactos ya cargados en la tabla
Contactos.forEach(function(contacto) {
  agregarFila(contacto.nombre,contacto.apellido, contacto.telefono, contacto.direccion, contacto.email);
});

// Función que agrega una fila a la tabla
function agregarFila(nombre,apellido, telefono, direccion, email) {
  const fila = `
  <tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${telefono}</td>
    <td>${direccion}</td>
    <td>${email}</td>
  </tr>`;
  document.getElementById("tabla").innerHTML += fila;
}

// Función que lee el formulario y agrega el contacto
function guardarContacto() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;
  const email = document.getElementById("email").value;

  // Creamos el objeto Contacto que toma los valores del formulario
  const Contacto = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    direccion: direccion,
    email: email
  };

  // Agregamos a la tabla
  agregarFila(Contacto.nombre, Contacto.apellido, Contacto.telefono, Contacto.direccion, Contacto.email);

  // Limpiamos los campos para el otro contacto ingresado por el usuario
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("email").value = "";
}
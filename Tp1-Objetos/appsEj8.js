// Array con los usuarios registrados
const usuarios = [
  { usuario: "usuario", contrasenia: "usuario123" },
  { usuario: "Agustina", contrasenia: "agustina123" }
];

function login() {

  // Obtenemos los valores ingresados por el usuario
  const usuario = document.getElementById("usuario").value;
  const contrasenia = document.getElementById("contrasenia").value;

  // Buscamos si existe algún usuario que coincida con los datos ingresados
  const encontrado = usuarios.find(usu => usu.usuario === usuario && usu.contrasenia === contrasenia);

  // Si encontró el usuario continua en la agenda, sino muestra error
  if (encontrado) {
    alert("Ingresaste correctamente");
    window.location.href = "agendaEj8.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}
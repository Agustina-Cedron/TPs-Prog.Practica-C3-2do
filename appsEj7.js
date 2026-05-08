// Array con las 6 ciudades de Japón y sus propiedades
const JapanCitys = [
  {
    Nombre: "Tokyo",
    Poblacion: "13.96 millones",
    Area: "2,194 km <sup>2</sup>",
    Imagen: "./imagenes/EJ7tokyo.jpg",
    Altitud: "40 msnm",
    Clima: "Subtropical húmedo",
  },
  {
    Nombre: "Kobe",
    Poblacion: "1.52 millones",
    Area: "557.02 km <sup>2</sup>",
    Imagen: "./imagenes/Ej7kobe.jfif",
    Altitud: "36 msnm",
    Clima: "Subtropical húmedo",
  },
  {
    Nombre: "Yokohama",
    Poblacion: "3.7 millones",
    Area: "437 km <sup>2</sup>",
    Imagen: "./imagenes/Ej7yokohama.jfif",
    Altitud: "5 msnm",
    Clima: "Subtropical húmedo",
  },
  {
    Nombre: "Osaka",
    Poblacion: "2.69 millones",
    Area: "222,30 km <sup>2</sup>",
    Imagen: "./imagenes/Ej7osaka.jfif",
    Altitud: "16 msnm",
    Clima: "Subtropical húmedo",
  },
  {
    Nombre: "Nagasaki",
    Poblacion: "401 mil",
    Area: "406 km <sup>2</sup>",
    Imagen: "./imagenes/Ej7nagasaki.jfif",
    Altitud: "27 msnm",
    Clima: "Subtropical húmedo",
  },
  {
    Nombre: "Sapporo",
    Poblacion: "1.9 millones",
    Area: "1121 km <sup>2</sup>",
    Imagen: "./imagenes/Ej7sapporo.jfif",
    Altitud: "26 msnm",
    Clima: "Continental húmedo",
  },
];

// Variable que acumula el HTML de las cards
let contenido = '<div class="row">';

// Recorremos el array y creamos una card por cada ciudad
JapanCitys.forEach((ciudad) => {
  contenido += `
    <div class="col-md-4 mb-4">
      <div class="card shadow h-100">
        <img src="${ciudad.Imagen}" class="card-img-top" alt="${ciudad.Nombre}"/>
        <div class="card-body">
          <h3 class="card-title">${ciudad.Nombre}</h3>
          <p class="card-text">Población: ${ciudad.Poblacion}</p>
          <p class="card-text">Área: ${ciudad.Area}</p>
          <p class="card-text">Altitud: ${ciudad.Altitud}</p>
          <p class="card-text">Clima: ${ciudad.Clima}</p>
        </div>
      </div>
    </div>`;
});

// Mostramos todas las cards en el documento
document.getElementById("respuesta").innerHTML = contenido;
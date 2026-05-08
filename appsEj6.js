const Libro = [];
function mostrarLibro() {
    const titulo= document.getElementById("titulo").value;
    const autor=document.getElementById("autor").value;
    const genero =document.getElementById("genero").value;
    const año=document.getElementById("año").value;

    const libro={
        Titulo:titulo,
        Autor:autor,
        Genero:genero,
        Año:año
    }
    Libro.push(libro);
    console.log(Libro);

    document.getElementById("respuesta").innerHTML +=`  <ul style="font-size: 1.2rem;">
    <li>Titulo: ${libro.Titulo}</li>
    <li>Autor: ${libro.Autor}</li>
    <li>Genero: ${libro.Genero}</li>
    <li>Año: ${libro.Año}</li>
    </ul>`;
    document.getElementById("titulo").value="";
    document.getElementById("autor").value="";
    document.getElementById("genero").value="";
    document.getElementById("año").value="";
}
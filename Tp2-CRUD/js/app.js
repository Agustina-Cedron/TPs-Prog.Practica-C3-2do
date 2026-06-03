const Url = "http://localhost:3000/tasks";
//obtenemos tareas desde la api(creada con json-server)
async function ObtenerTareas() {
  const response = await axios.get(Url);
  const data = response.data;
  //llamamos a la funcion para mostrar las tareas
  mostrarTareas(data);
  return data;
}
//funcion para filtrar las tareas por completadas, pendientes o todas
function filtrar(tipo) {
  //llamamos a la funcion para obtener las tareas y filtramos segun el tipo seleccionado por el usuario
  ObtenerTareas().then((tareas) => {
    //si el tipo es completadas, se muestran solo las tareas completas
    if (tipo === "completadas") {
      //filtramos las tareas para mostrar solo las completas
      mostrarTareas(tareas.filter(function(tarea){
        return tarea.completed === true;
      }));
    }
    //si el tipo es pendientes, se muestran solo las tareas pendientes
     else if (tipo === "pendientes") {
      //filtramos las tareas para mostrar solo las pendientes
      mostrarTareas(tareas.filter(function(tarea){
        return tarea.completed === false;
      }));
    } 
    //si el tipo es todas, se muestran todas las tareas
    else {
      mostrarTareas(tareas);
    }
  });
}
//funcion para mostrar las tareas
function mostrarTareas(tareas) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  //recorremos el array de tareas y las mostramos en el html
  tareas.forEach((tarea) => {
    let checked = "";
    //si la tarea esta completa, el checkbox se muestra marcado
    if (tarea.completed === true) {
      checked = "checked";
    }
    lista.innerHTML += `<div>
      <p>${tarea.title}</p>
      <p>Tarea Completa <input type="checkbox" ${checked} onclick="TareaCompletada('${tarea.id}', ${tarea.completed})"></p>
      <button type="button" class="btn btn-outline-danger" onclick="EliminarTarea('${tarea.id}')">Eliminar</button>
      <button type="button" class="btn btn-outline-success" onclick="EditarTarea('${tarea.id}')">Editar</button>
      </div>`;
  });
}
ObtenerTareas();
//funcion para agregar nuevas tareas
async function AgregarTarea() {
  const nuevaTarea = document.getElementById("nuevaTarea");
  const tareaN = nuevaTarea.value;
  //si el campo esta vacio, se muestra una alerta
  // para que el usuario ingrese una tarea
  if (tareaN === "") {
    alert("Ingrese una tarea");
    return;
  }
  //creamos un objeto con la nueva tarea
  const tarea = {
    title: tareaN,
    completed: false,
  };
  //mandamos la nueva tarea a la api para que se guarde en el json
  await axios.post(Url, tarea);
  //limpiamos el campo para que el usuario pueda ingresar una nueva tarea
  nuevaTarea.value = "";
  //llamamos a la funcion para las tareas nuevas
  ObtenerTareas();
}
//agregamos un evento al boton para agregar las nuevas tareas del usuario
document.getElementById("agregarTarea").addEventListener("click", AgregarTarea);
//funcion para eliminar tareas
async function EliminarTarea(id) {
  //mandamos el id de la tarea a eliminar a la api
  // para que se borre del json
  await axios.delete(`${Url}/${id}`);
  //llamamos a la funcion para mostrar las tareas actualizadas
  ObtenerTareas();
}
async function EditarTarea(id) {
  //pedimos al usuario que ingrese el nuevo nombre de la tarea
  // el prompt es una ventana para que ingrese el nuevo nombre de la tarea
  let nuevoNombre = prompt("Ingresá el nuevo nombre de la tarea");
  //si el usuario cancela el prompt, la tarea se muestra con el nombre que ya tenia
  if (nuevoNombre === null) {
    return;
  }
  //mandamos el id de la tarea a editar y el nuevo nombre a la api para que se actualice en el json
  await axios.patch(`${Url}/${id}`, { title: nuevoNombre });
  ObtenerTareas();
}
//funcion para marcar las tareas como completas o incompletas
async function TareaCompletada(id, completed) {
  //mandamos el id de la tarea a marcar como completa o incompleta y el estado actual de la tarea a la api
  //para que se actualice en el json
  console.log("id:", id, "completed:", completed);
  await axios.patch(`${Url}/${id}`, { completed: !completed });
  ObtenerTareas();
}

//Ejercicio3: 
/*esta funcion muestra los datos ingresados por el usuario en el form,+ el objeto producto con sus propiedades y el metodo para calcular
el precio final del producto con el descuento aplicado
al hacer click en el boton */
function mostrarProducto(){
    const nombre=document.getElementById("nombre").value;
    const precio=document.getElementById("precio").value;
    const descripcion=document.getElementById("descripcion").value;
    const marca=document.getElementById("marca").value;
    const descuento=document.getElementById("descuento").value;

    //objeto producto con sus propiedades
    const producto={
        Nombre: nombre,
        Precio: precio,
        Descripcion: descripcion,
        Marca: marca,
        Descuento: descuento,

         //Metodo para calcular el precio final del producto con el descuento aplicado
    CalcularDescuento: function(){
        const descAplicado=this.Precio*(this.Descuento/100);
        return this.Precio-descAplicado;
         }
    };
   
   
    //se muestra en el HTML los datos ingresados por el usuario y el precio final del producto con el descuento aplicado
    document.getElementById("respuesta").innerHTML =`<p>Nombre:${producto.Nombre}</p>
    <p>Precio:${producto.Precio}</p>
    <p>Descripcion:${producto.Descripcion}</p>
    <p>Marca:${producto.Marca}</p>
    <p>Descuento:${producto.Descuento}%</p>
    <p>Precio Final:${producto.CalcularDescuento()}</p>`;
}
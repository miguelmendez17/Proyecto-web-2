



var listaEquipos = JSON.parse(localStorage.getItem("listaEquipos"));

for(var i=0; i < listaEquipos.length ; i++){

    //inserta productos en el div COntent
    $('#content').append(
        "<div id='product-box' class='col-md-2'>" +
        "<div class='productbox'>"+
        "<img src='"+ listaEquipos[i].imagen +"' class='img-responsive' alt='Product IMG'>"+
        "<div class='producttitle'>"+listaEquipos[i].nombre+"</div>"+
        "<p class='text-justify'>Precio: "+listaEquipos[i].precio+"</p>"+
        "<p class='text-justify'>Categoria: "+listaEquipos[i].categoria+"</p>"+
        "<p class='text-justify'>Cantidad: "+listaEquipos[i].cantidad+"</p>"+
        "<p class='text-justify'>Descripción: "+listaEquipos[i].descripcion+"</p>"+
        "<div class='productprice'>"+
        "<input style='width: 40px;' min='1' max='20' type='number' name='cantProductos'> "+
        "<div class='pull-right'>"+
        "<a href='#' onclick='buscarProducto(\""+listaEquipos[i].id+"\")' class='btn btn-success btm-sm' role='button'>Add<span class='glyphicon glyphicon-shopping-cart'></span></a>"+
        "</div>"+
        "<div class='pricetext' >"+
        "<a  href='#' class='btn btn-warning btm-sm' role='button'>Wish<span class='glyphicon glyphicon-heart'></span></a>"+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>");

}
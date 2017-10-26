

function mostrarPorCategorias(categoria){
    $("#content").empty();
    for(var i=0; i < listaProductosGlobal.length ; i++){
        if(listaProductosGlobal[i].categoria ==categoria){
            $('#content').append( 
                "<div class='col-md-3'>" +
                    "<div class='productbox'>"+
                        "<img src='"+ listaProductosGlobal[i].imagen +"' class='productoTamano' alt='Product IMG'>"+
                        "<div class='producttitle'>"+listaProductosGlobal[i].nombre+"</div>"+
                            "<p class='text-justify'>Precio: "+listaProductosGlobal[i].precio+"</p>"+
                            "<p class='text-justify'>Categoria: "+listaProductosGlobal[i].categoria+"</p>"+
                            "<p class='text-justify'>Cantidad disponible: "+listaProductosGlobal[i].cantidad+"</p>"+
                            "<p class='text-justify'>Descripción: "+listaProductosGlobal[i].descripcion+"</p>"+
                        "<div class='productprice'>"+
                        "<div class='pull-right'>"+
                            "<a href='#' onclick='agregaCantidadEnDeseos(\""+listaProductosGlobal[i].id+"\")' class='btn btn-warning btm-sm' role='button'>Wish<span class='glyphicon glyphicon-heart'></span></a>"+
                        "</div>"+

                        "<div class='col-xs-5'"+
                            "<div>"+   
                                "<input id=\""+i+i+"\"  class='form-control' min='0' type='number'>"+
                            "</div>"+
                        "</div>"+
                     
                        "<div class='pricetext' >"+
                            "<a href='#' onclick='agregarCarritoDesdeButtonAdd(\""+i+i+"\""+","+"\""+listaProductosGlobal[i].id+"\")' class='btn btn-success btm-sm' role='button'>Add<span class='glyphicon glyphicon-shopping-cart'></span></a>"+ 
                        "</div>"+    
                        "</div>"+
                    "</div>"+
                "</div>");
            }
        }
}
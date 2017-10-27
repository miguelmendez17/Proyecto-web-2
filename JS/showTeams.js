

function loadRanking() {

    $.get("./PHP/getRanking.php", function(datas){


        // var datas = JSON.stringify(data);
        //console.log(datas);

        var data = JSON.parse(datas);
     //   console.log(data[1].name);
        $("#content").empty();
        for(var i=0; i < 100 ; i++){
            $('#content').append(
                "<div class='col-md-3'>" +
                "<div class='productbox'>"+
                "<img src='"+ data[i].flag +"' class='productoTamano' alt='TEAM IMG'>"+
                "<div class='producttitle'>"+data[i].name+"</div>"+
                "<p class='text-justify'>Rank: "+(i+1)+"</p>"+
                "<p class='text-justify'>Country: "+data[i].name+"</p>"+
                "<p class='text-justify'>Confederation: "+data[i].confederation+"</p>"+
                "<p class='text-justify'>Points "+data[i].points+"</p>"+
                "<div class='productprice'>"+
                "<div class='pull-right'>"+
         //       "<a href='#' onclick='' class='btn btn-warning btm-sm' role='button'>Activate<span class='glyphicon glyphicon-heart'></span></a>"+
                "</div>"+

                "<div class='pricetext' >"+
         //       "<a href='#' onclick='' class='btn btn-success btm-sm' role='button'>Add<span class='glyphicon glyphicon-shopping-cart'></span></a>"+
                "</div>"+
                "</div>"+
                "</div>"+
                "</div>");
        }


    });

}

loadRanking();




//alert("TEANS");
/*
function mostrarPorCategorias(categoria){


}
*/
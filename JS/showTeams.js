
//esta función carga el ranking 100 de los mejores países, ordenado por porcentaje.
function loadRanking() {
    $.get("./PHP/getRanking.php", function(datas){
        var data = JSON.parse(datas);
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
                "</div>"+
                "</div>");
        }
    });
}
loadRanking();

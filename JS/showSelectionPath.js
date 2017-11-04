
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
}



function drop(ev) {
    ev.preventDefault();

    var elementoArrastrado = $("#"+ ev.dataTransfer.getData("text")); // Elemento arrastrado // Elemento arrastrado

    var idArrastrado = elementoArrastrado.attr('id');
    var srcAnterior = elementoArrastrado.attr('src'); // obtiene la bandera para

    var idPresente = ev.target.id;
    var srcPresente = ev.target.src;



//            alert(srcPresente);

    ev.target.src = srcAnterior;
    ev.target.id = idArrastrado;


    elementoArrastrado.attr('src',srcPresente);
    elementoArrastrado.attr('id',idPresente);

    //  ev.target.appendChild(movecarclone);
    // Añade el elemento arrastrado al elemento desde el que se llama a esta funcion


}



function loadTEAMSNewTour() {
    //ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)"
   var cont = 0;
    var categorias = ["CAF","CONCACAF","CONMEBOL","OFC","AFC","UEFA"];
    $.each(categorias, function(i, team){
        $('#'+team+'').empty();



        $.ajax({
            url: "./PHP/getCountriesConfederation.php?",
            type: "post",
            data: {countryN:team},
            success: function(data){
                var countries = JSON.parse(data);
                console.log(team);
                $.each(countries, function(index, value){

                    $('#'+team+'').append('<abbr title="'+value.country+'"><img src="'+ value.flag +'" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)" id="'+ value.country +'" style=" padding: 2px 2px 2px 2px; "  width="70" height="31"></abbr>');
                    cont = cont +1;

                    console.log(cont);

                });
            }
        });


    });


}

loadTEAMSNewTour();

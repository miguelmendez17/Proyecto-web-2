
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
}



function drop(ev) {
    ev.preventDefault();

    var id = ev.target.className; // Elemento sobre el que se arrastra


    if (id === 'team-selected' || id === 'team-repechaje'){ // pregunta si es un espacio en blanco,
        var data = ev.dataTransfer.getData("text"); //mueve el equipo e arrastrado
        ev.target.appendChild(document.getElementById(data)); // lo mete dentro del espacio en blanco
    }else{//si no intercambie las banderas y el ID



    var elementoArrastrado = $("#"+ ev.dataTransfer.getData("text")); // Elemento arrastrado // Elemento arrastrado

    var idArrastrado = elementoArrastrado.attr('id');//obtiene el id ( nobmre de equipo)
    var srcAnterior = elementoArrastrado.attr('src'); // obtiene la bandera

    var idPresente = ev.target.id;//obtiene el id (nombre de equipo) del equipo al que se va a drop
    var srcPresente = ev.target.src; //lo mismo pero con la bandera



//            alert(srcPresente);
//se asigna los datos del equipo arrastrado al equipo donde se va a drop
    ev.target.src = srcAnterior;
    ev.target.id = idArrastrado;

//se asigna los datos del equipo donde se drop
    elementoArrastrado.attr('src',srcPresente);
    elementoArrastrado.attr('id',idPresente);

    //  ev.target.appendChild(movecarclone);
    // Añade el elemento arrastrado al elemento desde el que se llama a esta funcion
    }

}



function loadTEAMSNewTour() {
    //ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)"
    var cont = 0;
    var categorias = new Array("CAF","CONCACAF","CONMEBOL","OFC","AFC","UEFA");
    $.each(categorias, function(i, team){
        $('#'+team+'').empty();


// se encarga de agregar los equipos de cada confederacion,
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
            },
            error: function(){
                
                alert("Error");
            }
        });


    });


}

loadTEAMSNewTour();

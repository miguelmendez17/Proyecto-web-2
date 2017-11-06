
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    var id = ev.target.className; // Elemento sobre el que se arrastra


    if (id === 'repechajeUEFAGroup team-selected'){ // pregunta si es un espacio en blanco,
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

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


$('#repechajeSort-container').empty();




function loadRepechajeTeams() {
    //ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)"

    var repechajes = JSON.parse(localStorage.getItem("repechajes"));

    $.each(repechajes, function(i, value){
// se encarga de agregar los equipos de cada confederacion,
      if(i >= 4)
        $('#repechajeSort-container').append('<abbr title="'+value.name+'"><img src="'+ value.flag +'" id="'+ value.name +'"  draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)" style=" padding: 2px 2px 2px 2px; "  width="70" height="31"></abbr>');


    });
}
loadRepechajeTeams();




var score1 = randomNumberFromRange(1,5);
var score2 = randomNumberFromRange(1,5);


var repechajeResults = [];
var repechajeDirectos = [];
$(document).on('click', '#btn-getUEFA-WR', function () {
    repechajeResults = [];
        var cont = 1;
        $('table tr .UEFA-R-Team .repechajeUEFAGroup img').each(function(i){

            $(this).attr('name',randomNumberFromRange(1,5));
            repechajeResults.push({name:$(this).attr('id'),goals: $(this).attr('name'),result:''});

        });
       // console.log(repechajeResults);
//pasa por cada row del table, y pregunta por los pares de los equipos, quien es el que gana para mostrarlo en el html. y ademas se mete en la lista de repechajesPartidos
        $('table tr .UEFA-R-Score h4').each(function(i){
            if(i===0){
                if(repechajeResults[0].goals > repechajeResults[1].goals){
                    $(this).text(repechajeResults[0].goals+" : " + repechajeResults[1].goals);
                    repechajeResults[0].result = 'WON';
                }else{
                    $(this).text(repechajeResults[0].goals+" : " + repechajeResults[1].goals);
                    repechajeResults[1].result = 'WON';
                }
            }
            if(i===1){

                if(repechajeResults[2].goals > repechajeResults[3].goals){
                    $(this).text(repechajeResults[2].goals+" : " + repechajeResults[3].goals);
                    repechajeResults[2].result = 'WON';
                }else{
                    $(this).text(repechajeResults[2].goals+" : " + repechajeResults[3].goals);
                    repechajeResults[3].result = 'WON';
                }
            }
            if(i===2){

                if(repechajeResults[4].goals > repechajeResults[5].goals){
                    $(this).text(repechajeResults[4].goals+" : " + repechajeResults[5].goals);
                    repechajeResults[4].result = 'WON';
                }else{
                    $(this).text(repechajeResults[4].goals+" : " + repechajeResults[5].goals);
                    repechajeResults[5].result = 'WON';
                }

            }
            if(i===3){

                if(repechajeResults[6].goals > repechajeResults[7].goals){
                    $(this).text(repechajeResults[6].goals+" : " + repechajeResults[7].goals);
                    repechajeResults[6].result = 'WON';
                }else{
                    $(this).text(repechajeResults[6].goals+" : " + repechajeResults[7].goals);
                    repechajeResults[7].result = 'WON';
                }
            }

        });

 //se encarga de llenar la lista final de los que ganan los repechajes para luego los agregen en los bombos.
        $(repechajeResults).each(function (i, val) {
            if(val.result === 'WON'){
                repechajeDirectos.push(val)
            }
        });



});



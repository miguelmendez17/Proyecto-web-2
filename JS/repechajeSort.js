
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



$(document).on('click', '#btn-getUEFA-WR', function () {


        $('table tr .UEFA-R-Team .repechajeUEFAGroup img').each(function(){
            $(this).attr('name',randomNumberFromRange(1,5));
            console.log($(this).attr('name'));
        });

        $('table tr').each(function(i){
            if(i==3){

                if (parseInt($('#t1 .repechajeUEFAGroup img').attr('name')) > $('#t2 .repechajeUEFAGroup img').attr('name')){
                    $('.partido1 .UEFA-R-Score h4').text("WON " + $('#t1 .repechajeUEFAGroup img').attr('id')+$('#t1 .team-selected img').attr('name') )
                } else if (parseInt($('#t1 .repechajeUEFAGroup img').attr('name')) < $('#t2 .repechajeUEFAGroup img').attr('name')){
                    $('.partido1 .UEFA-R-Score h4').text("WON" + $('#t2 .repechajeUEFAGroup img').attr('id')+$('#t2 .team-selected img').attr('name') )
                }

            } if(i==2){
                if (parseInt($('#t3 .repechajeUEFAGroup img').attr('name')) > $('#t4 .repechajeUEFAGroup img').attr('name')){
                    $('.partido2 .UEFA-R-Score h4').text("WON" + $('#t3 .repechajeUEFAGroup img').attr('id') )
                }else{
                    $('.partido2 .UEFA-R-Score h4').text("WON" + $('#t4 .repechajeUEFAGroup img').attr('id') )
                }


            } if(i==1){
                if (parseInt($('#t5').attr('name')) > $('#t6').attr('name')){
                    $('.partido1 .UEFA-R-Score h4').text("WON" + $('#t5 .repechajeUEFAGroup img').attr('id') )
                }else{
                    $('.partido1 .UEFA-R-Score h4').text("WON" + $('#t6 .repechajeUEFAGroup img').attr('id') )
                }


            } if(i==0){
                if (parseInt($('#t7').attr('name')) > $('#t8').attr('name')){
                    $('.partido1 .UEFA-R-Score h4').text("WON" + $('#t7 .repechajeUEFAGroup img').attr('id') )
                }else{
                    $('.partido1 .UEFA-R-Score h4').text("WON" + $('#t8 .repechajeUEFAGroup img').attr('id') )
                }

            }

        });

});



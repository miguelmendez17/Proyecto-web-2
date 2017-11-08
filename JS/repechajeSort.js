
//oculta lo necesario
$('.OTHER-table').hide();
$('#btn-getOTHER-WR').hide();
$('#btn-NEXT-WR').hide();
$('#btn-NETX-TO-BOMBO').hide();

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

//se limpia lo que está en el contenedor del repechajeSort.
$('#repechajeSort-container').empty();


function loadUEFARepechajeTeams() {
    //ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)"
    var repechajes = JSON.parse(localStorage.getItem("repechajes"));

    $.each(repechajes, function(i, value){
// se encarga de agregar los equipos de cada confederacion,
      if(i >= 4)
        $('#repechajeSort-container').append('<abbr title="'+value.name+'"><img src="'+ value.flag +'" id="'+ value.name +'" value="'+ value.points+'" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)" style=" padding: 2px 2px 2px 2px; "  width="70" height="31"></abbr>');

    });
}
loadUEFARepechajeTeams();

function loadOTHERRepechajeTeams() {
    //ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)"

    var repechajes = JSON.parse(localStorage.getItem("repechajes"));

    $.each(repechajes, function(i, value){
// se encarga de agregar los equipos de cada confederacion,
        if(i < 4)
            $('#repechajeSort-container').append('<abbr title="'+value.name+'"><img src="'+ value.flag +'" id="'+ value.name +'" value="'+ value.points+'"  draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)" style=" padding: 2px 2px 2px 2px; "  width="70" height="31"></abbr>');


    });
}


//limpia los resultados en el espacio resultados del table.
function cleanScoreSpaces(){
    $('table tr .UEFA-R-Team .repechajeUEFAGroup').each(function(i){
        $(this).empty();
    });
    $('table tr .UEFA-R-Score h4').each(function(i){

        $(this).text('- : -');

    });
}



var repechajeResults = [];
var repechajeDirectos = [];

$(document).on('click', '#btn-getUEFA-WR', function () {

    var totalIMGselected = 0; //variable que va llevando los países arrastrados para sacar sus resultados random en repechaje UEFA
    $('table tr .UEFA-R-Team .repechajeUEFAGroup img').each(function(i){
        totalIMGselected+=1; //aumento en cada coincidencia.
    });
    
    if(totalIMGselected!=8){
        return;
    }

    repechajeResults = []; //lista temporal de resultados
        var cont = 1;
        $('table tr .UEFA-R-Team .repechajeUEFAGroup img').each(function(i){
            $(this).attr('name',randomNumberFromRange(1,5));
            repechajeResults.push({name:$(this).attr('id'),flag:$(this).attr('src'),goals: $(this).attr('name'),points:$(this).attr('value'),result:''});
    
        });
       // console.log(repechajeResults);
//pasa por cada row del table, y pregunta por los pares de los equipos, quien es el que gana para mostrarlo en el html. y ademas se mete en la lista de repechajesPartidos
        $('table tr .UEFA-R-Score h4').each(function(i){
            if(i===0){
                if(repechajeResults[0].goals > repechajeResults[1].goals){
                    $(this).text(repechajeResults[0].goals+" : " + repechajeResults[1].goals);
                    repechajeResults[0].result = 'WON';
                }else if(repechajeResults[0].goals < repechajeResults[1].goals){
                    $(this).text(repechajeResults[0].goals+" : " + repechajeResults[1].goals);
                    repechajeResults[1].result = 'WON';
                }else{
                    if(repechajeResults[0].points < repechajeResults[1].points){
                        $(this).text(repechajeResults[0].goals+" : " + repechajeResults[1].goals);
                        repechajeResults[0].result = 'WON';
                    }else{
                        $(this).text(repechajeResults[0].goals+" : " + repechajeResults[1].goals);
                        repechajeResults[1].result = 'WON';
                    }
                }
            }
            if(i===1){

                if(repechajeResults[2].goals > repechajeResults[3].goals){
                    $(this).text(repechajeResults[2].goals+" : " + repechajeResults[3].goals);
                    repechajeResults[2].result = 'WON';
                }else if(repechajeResults[2].goals < repechajeResults[3].goals){
                    $(this).text(repechajeResults[2].goals+" : " + repechajeResults[3].goals);
                    repechajeResults[3].result = 'WON';
                }else{
                    if(repechajeResults[2].points < repechajeResults[3].points){
                        $(this).text(repechajeResults[2].goals+" : " + repechajeResults[3].goals);
                        repechajeResults[2].result = 'WON';
                    }else{
                        $(this).text(repechajeResults[2].goals+" : " + repechajeResults[3].goals);
                        repechajeResults[3].result = 'WON';
                    }
                }
            }
            if(i===2){

                if(repechajeResults[4].goals > repechajeResults[5].goals){
                    $(this).text(repechajeResults[4].goals+" : " + repechajeResults[5].goals);
                    repechajeResults[4].result = 'WON';
                }else if(repechajeResults[4].goals < repechajeResults[5].goals){
                    $(this).text(repechajeResults[4].goals+" : " + repechajeResults[5].goals);
                    repechajeResults[5].result = 'WON';
                }else{
                    if(repechajeResults[4].points < repechajeResults[5].points){
                        $(this).text(repechajeResults[4].goals+" : " + repechajeResults[5].goals);
                        repechajeResults[4].result = 'WON';
                    }else{
                        $(this).text(repechajeResults[4].goals+" : " + repechajeResults[5].goals);
                        repechajeResults[5].result = 'WON';
                    }
                }

            }
            if(i===3){

                if(repechajeResults[6].goals > repechajeResults[7].goals){
                    $(this).text(repechajeResults[6].goals+" : " + repechajeResults[7].goals);
                    repechajeResults[6].result = 'WON';
                }else if(repechajeResults[6].goals < repechajeResults[7].goals){
                    $(this).text(repechajeResults[6].goals+" : " + repechajeResults[7].goals);
                    repechajeResults[7].result = 'WON';
                }else{
                    if(repechajeResults[6].points < repechajeResults[7].points){
                        $(this).text(repechajeResults[6].goals+" : " + repechajeResults[7].goals);
                        repechajeResults[6].result = 'WON';
                    }else{
                        $(this).text(repechajeResults[6].goals+" : " + repechajeResults[7].goals);
                        repechajeResults[7].result = 'WON';
                    }
                }
            }

        });

 //se encarga de llenar la lista final de los que ganan los repechajes para luego los agregen en los bombos.
        $(repechajeResults).each(function (i, val) {
            if(val.result === 'WON'){
                repechajeDirectos.push(val)
            }
        });

    $(this).hide();
    $('#btn-NEXT-WR').show();
});

//se ocultan los necesarios, y se muestran los especificados. Cuando se obtienen
//los repechajes de UEFA, se necesitan los repechajes de otras confederaciones. 
$(document).on('click', '#btn-NEXT-WR', function () {
    $('#btn-getOTHER-WR').show();
    $('.repTeams').empty();
    cleanScoreSpaces();
    $('.titleScores').text('Repechajes OTROS:');
    loadOTHERRepechajeTeams();
    $('.UEFA-table').hide();
    $('.OTHER-table').show();
    $(this).hide();
});



$(document).on('click', '#btn-getOTHER-WR', function () {

    var totalIMGselected = 0;
    var totalOtherGroup= 4;   // cuatro repechajes nada más, aparte de los de la UEFA
     $('.OTHER-table tr .UEFA-R-Team .repechajeUEFAGroup img').each(function(i){
        totalIMGselected+=1;
     });
     
     //valida que ya haya seleccionado toodos los repechajes
     if(totalIMGselected!=totalOtherGroup){
        return;
     }

    repechajeResults = [];
    var cont = 1;
    $('.OTHER-table tr .UEFA-R-Team .repechajeUEFAGroup img').each(function(i){

        $(this).attr('name',randomNumberFromRange(1,5));

        repechajeResults.push({name:$(this).attr('id'),flag:$(this).attr('src'),goals: $(this).attr('name'),points:$(this).attr('value'),result:''});
    });
    // console.log(repechajeResults);
//pasa por cada row del table, y pregunta por los pares de los equipos, quien es el que gana para mostrarlo en el html. y ademas se mete en la lista de repechajesPartidos
    $('.OTHER-table tr .UEFA-R-Score h4').each(function(i){
        if(i===0){
            if(repechajeResults[0].goals > repechajeResults[1].goals){
                $(this).text(repechajeResults[0].goals+" : " + repechajeResults[1].goals);
                repechajeResults[0].result = 'WON';
            }else  if(repechajeResults[0].goals < repechajeResults[1].goals){
                $(this).text(repechajeResults[0].goals+" : " + repechajeResults[1].goals);
                repechajeResults[1].result = 'WON';
            }else{
                if(repechajeResults[0].points < repechajeResults[1].points){
                    $(this).text(repechajeResults[0].goals+" : " + repechajeResults[1].goals);
                    repechajeResults[0].result = 'WON';
                }else{
                    $(this).text(repechajeResults[0].goals+" : " + repechajeResults[1].goals);
                    repechajeResults[1].result = 'WON';
                }
            }
        }
        if(i===1){

            if(repechajeResults[2].goals > repechajeResults[3].goals){
                $(this).text(repechajeResults[2].goals+" : " + repechajeResults[3].goals);
                repechajeResults[2].result = 'WON';
            }else if(repechajeResults[2].goals < repechajeResults[3].goals){
                $(this).text(repechajeResults[2].goals+" : " + repechajeResults[3].goals);
                repechajeResults[3].result = 'WON';
            }else{
                if(repechajeResults[2].points < repechajeResults[3].points){
                    $(this).text(repechajeResults[2].goals+" : " + repechajeResults[3].goals);
                    repechajeResults[2].result = 'WON';
                }else{
                    $(this).text(repechajeResults[2].goals+" : " + repechajeResults[3].goals);
                    repechajeResults[3].result = 'WON';
                }
            }
        }

    });

    //se encarga de llenar la lista final de los que ganan los repechajes para luego los agregen en los bombos.
    $(repechajeResults).each(function (i, val) {
        if(val.result === 'WON'){
            repechajeDirectos.push(val)
        }
    });


    var repechajeFinal = JSON.stringify(repechajeDirectos); // AQUI METE LA LISTA DE LOS QUE PASARON!
    localStorage.setItem('repechajes',repechajeFinal);// AQUI METE LA LISTA DE LOS QUE PASARON!

    var directos = JSON.parse(localStorage.getItem('directos'));

    $(repechajeDirectos).each(function (i,value) {

        directos.push(value);
    });


    var directosFinal = JSON.stringify(directos);
    localStorage.setItem('directos',directosFinal);

    $(this).hide();
    $('#btn-NETX-TO-BOMBO').show();

});


//aquí muestra el archivo donde están los bombos ya formados. Ordenado por 
//primero anfitrión y luego los que le sigan en puntos.
$(document).on('click', '#btn-NETX-TO-BOMBO', function (){
    location.href="bombos.html";
});








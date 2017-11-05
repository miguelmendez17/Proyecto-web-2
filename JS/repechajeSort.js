
$('#repechajeSort-container').empty();

function loadRepechajeTeams() {
    //ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)"

    var repechajes = JSON.parse(localStorage.getItem("repechajes"));

    $.each(repechajes, function(i, value){
// se encarga de agregar los equipos de cada confederacion,
      if(i >= 4)
        $('#repechajeSort-container').append('<div class="col-xs-5"><img src="'+ value.flag +'" id="'+ value.name +'" style=" padding: 2px 2px 2px 2px; "  width="70" height="31"></div>');

        console.log(value.name);
    });
}
loadRepechajeTeams();

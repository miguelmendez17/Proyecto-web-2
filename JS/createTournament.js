

var listaDirectos = [];
var listaRepechaje = [];

localStorage.removeItem("repechajes");
localStorage.removeItem("directos");

$(document).on('click', '#createTournament', function () {
    var totalCountries = 0;
    var totalCountriesRepechajeSelected = 39;

    $('.team-repechaje img').each(function () {
        var team = {name: $(this).attr('id'), flag:$(this).attr('src'),points:0, result: ""};
        listaRepechaje.push(team);
        totalCountries+=1;
    });

    $('.team-selected img').each(function () {
        var team = {name:$(this).attr('id'), flag:$(this).attr('src'),points:0, result: ""};
        listaDirectos.push(team);
        totalCountries+=1;
    });

    if(totalCountries === totalCountriesRepechajeSelected){
        var repechajes = JSON.stringify(listaRepechaje);
        var directos = JSON.stringify(listaDirectos);
        localStorage.setItem('repechajes',repechajes);
        localStorage.setItem('directos',directos);

        var prueba = localStorage.getItem('repechajes');
        location.href="createTournament.html";
    }
    else{
        alert("You must select all");
    }

});





//crea la lista global "temporal" de directos y repechaje
//esto se guarda en localStorage
var listaDirectos = [];
var listaRepechaje = [];

//al iniciar en este javaScript remueve todo lo que tenían esas claves.
//se limpia cada vez que se quieren sacar repechajes y directos en cada ejecución.
localStorage.removeItem("repechajes");
localStorage.removeItem("directos");

$(document).on('click', '#createTournament', function () {
    var totalCountries = 0;   //variable para verificar que haya 38 países seleccionados.
    var totalCountriesRepechajeSelected = 38; //variable que indica cuantos paises deberían ser seleccionados

    $('.team-repechaje img').each(function () {
        var team = {name: $(this).attr('id'), flag:$(this).attr('src'),points:$(this).attr('value'), result: ""};
        listaRepechaje.push(team);
        totalCountries+=1;  //aumenta selecccionados en cada imagen que contenta en la clase team-repechaje
    });

    $('.team-selected img').each(function () {
        var team = {name:$(this).attr('id'), flag:$(this).attr('src'),points:$(this).attr('value'), result: ""};
        listaDirectos.push(team);
        totalCountries+=1; //aumenta selecccionados en cada imagen que contenta en la clase team-selected
    });

    if(totalCountries === totalCountriesRepechajeSelected){
        var repechajes = JSON.stringify(listaRepechaje); //convierte a json la lista de repechajes temporal
        var directos = JSON.stringify(listaDirectos); //convierte a json la lista de directos temporal
        localStorage.setItem('repechajes',repechajes);//ese temporal se guarda en localStorage
        localStorage.setItem('directos',directos);//ese temporal se guarda también en localStorage
        location.href="createTournament.html"; //direcciona al archivo para crear torneo.
    }
    else{
        listaDirectos.length=0;  //valida que se hayan seleccionado todos los campos de repechaje y directos
        listaRepechaje.length=0;
        alert("You must select all");
    }

});




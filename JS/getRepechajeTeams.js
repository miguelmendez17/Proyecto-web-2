

var listaDirectos = [];
var listaRepechaje = [];
$(document).on('click', '#getRepechajes', function () {

    $('.team-repechaje img').each(function () {
        var team = {name: $(this).attr('id'), flag:$(this).attr('src'), result: ""};
        listaRepechaje.push(team);
    });

    $('.team-selected img').each(function () {
        var team = {name:$(this).attr('id'), flag:$(this).attr('src'), result: ""};
        listaDirectos.push(team);
    });

    var repechajes = JSON.stringify(listaRepechaje);
    var directos = JSON.stringify(listaDirectos);
    localStorage.setItem('repechajes',repechajes);
    localStorage.setItem('directos',directos);
    alert(localStorage.getItem('directos'));
});




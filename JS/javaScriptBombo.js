$(document).ready(function () {

    var myjson = JSON.parse(localStorage.getItem("directos")); //trae de localStorage 
    var host = localStorage.getItem("host"); //trae el nombre del host, que está en localStorage en una variable
    myjson.sort((a, b) => Number(b.points) - Number(a.points)); //ordena lista de mayor a enor

    var html = '';
    var bombo1 =  myjson.slice(0, 8) //primeros 8 (mejores puntajes) 
    var bombo2 =  myjson.slice(8,16); //segundos mejores puntajes
    var bombo3 =  myjson.slice(16, 24) //terceros mejores puntajes
    var bombo4 =  myjson.slice(24,32); //los países directos con menores puntajes..

    var arrayPositions = cargarJSONPositions();
    var bombo1Letters = arrayPositions.slice(0,4);
    var bombo2Letters = arrayPositions.slice(4,8);
    var bombo3Letters = arrayPositions.slice(8,12);
    var bombo4Letters = arrayPositions.slice(12,16);
    var bombo5Letters = arrayPositions.slice(16,20);
    var bombo6Letters = arrayPositions.slice(20,24);
    var bombo7Letters = arrayPositions.slice(24,28);
    var bombo8Letters = arrayPositions.slice(28,32);

    $.each(bombo1, function( key, value ) {
        html += '<tr>';
        if(bombo1[key].name==host) //esto es para ver a manera visual cual es el host, debe ir en primer bombo
        {
            html += "<td>"+(key+1+".  ")+"<img src="+bombo1[key].flag+">"+bombo1[key].name + "  (HOST)"+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo2[key].flag+">"+bombo2[key].name+cambiar(bombo2,key)+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo3[key].flag+">"+bombo3[key].name+cambiar(bombo3,key)+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo4[key].flag+">"+bombo4[key].name+cambiar(bombo4,key)+"</td>";
            html += '</tr>'; 
        }
        else{
            html += "<td>"+(key+1+".  ")+"<img src="+bombo1[key].flag+">"+bombo1[key].name+cambiar(bombo1,key)+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo2[key].flag+">"+bombo2[key].name+cambiar(bombo2,key)+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo3[key].flag+">"+bombo3[key].name+cambiar(bombo3,key)+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo4[key].flag+">"+bombo4[key].name+cambiar(bombo4,key)+"</td>";
            html += '</tr>'; 
        }
    });
    $('#table').append(html); //guarda todo el html creado jquery en table    
    htmlPositions = '';
     $.each(bombo1Letters, function( key, value ) {
            htmlPositions += '<tr>';
            htmlPositions += "<td>"+bombo1Letters[key]+"</td>";
            htmlPositions += "<td>"+bombo2Letters[key] +"</td>";
            htmlPositions += "<td>"+bombo3Letters[key]+"</td>";
            htmlPositions += "<td>"+bombo4Letters[key]+"</td>";
            htmlPositions += "<td>"+bombo5Letters[key]+"</td>";
            htmlPositions += "<td>"+bombo6Letters[key] +"</td>";
            htmlPositions += "<td>"+bombo7Letters[key]+"</td>";
            htmlPositions += "<td>"+bombo8Letters[key]+"</td>";
            htmlPositions += '</tr>'; 
        });
        $('#tableDraw').append(htmlPositions); //guarda todo el html creado jquery en table

        probar();
}); // end doc ready


//función auxiliar pra mostrar los puntos de cada país..
function cambiar(bombo,key){    
    return "  ("+bombo[key].points +") points";
}

//carga en un array las posiciones. Para hacer mejor lo del sorteo.
function cargarJSONPositions(){
    var arrayPositions = []
    var arrayLetters = new Array("A","B","C","D");
    for(var i=1;i<=8;i++){
        for(var a=0;a<arrayLetters.length;a++)
        {
            var createPosition = i +"-" +arrayLetters[a]; 
            arrayPositions.push(createPosition);
        }
    }
    return arrayPositions;
}

function probar(){
    $('#table img').each(function () {
        var images = $(this).attr('src'); 
    });

    $('#tableDraw td').each(function (index){
        $(this).prepend($('<img>',{id:'theImg',src:'https://i.stack.imgur.com/6ik31.png?s=32&g=1'}));
        $(this).delay(500 * index).slideDown(500); //hacerlo 
    });
}

$(document).ready(function () {

    var myjson = JSON.parse(localStorage.getItem("directos")); //trae de localStorage 
    var host = localStorage.getItem("host"); //trae el nombre del host, que está en localStorage en una variable
    myjson.sort((a, b) => Number(b.points) - Number(a.points)); //ordena lista de mayor a enor

    var html = '';
    var bombo1 =  myjson.slice(0, 8) //primeros 8 (mejores puntajes) 
    var bombo2 =  myjson.slice(8,16); //segundos mejores puntajes
    var bombo3 =  myjson.slice(16, 24) //terceros mejores puntajes
    var bombo4 =  myjson.slice(24,32); //los países directos con menores puntajes..

    $.each(bombo1, function( key, value ) {
        html += '<tr>';
        if(bombo1[key].name==host) //esto es para ver a manera visual cual es el host, debe ir en primer bombo
        {
            html += "<td>"+(key+1+".  ")+"<img src="+bombo1[key].flag+" width='60' height='40'>"+bombo1[key].name + "  (HOST)"+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo2[key].flag+" width='60' height='40'>"+bombo2[key].name+cambiar(bombo2,key)+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo3[key].flag+" width='60' height='40'>"+bombo3[key].name+cambiar(bombo3,key)+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo4[key].flag+" width='60' height='40'>"+bombo4[key].name+cambiar(bombo4,key)+"</td>";
            html += '</tr>'; 
        }
        else{
            html += "<td>"+(key+1+".  ")+"<img src="+bombo1[key].flag+" width='60' height='40'>"+bombo1[key].name+cambiar(bombo1,key)+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo2[key].flag+" width='60' height='40'>"+bombo2[key].name+cambiar(bombo2,key)+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo3[key].flag+" width='60' height='40'>"+bombo3[key].name+cambiar(bombo3,key)+"</td>";
            html += "<td>"+(key+1+".  ")+"<img src="+bombo4[key].flag+" width='60' height='40'>"+bombo4[key].name+cambiar(bombo4,key)+"</td>";
            html += '</tr>'; 
        }
    });
      $('#table').append(html); //guarda todo el html creado jquery en table
    
    }); // end doc ready


//función auxiliar pra mostrar los puntos de cada país..
function cambiar(bombo,key){    
    return "  ("+bombo[key].points +") points";
}

$(document).ready(function () {

    var myjson = JSON.parse(localStorage.getItem("directos"));
    var host = localStorage.getItem("host");
    var tr;
    myjson.sort((a, b) => Number(b.points) - Number(a.points));

    var totalCells = 4;

    var html = '';
    var bombo1 =  myjson.slice(0, 8) // ["a", "b"]
    var bombo2 =  myjson.slice(8,16);
    var bombo3 =  myjson.slice(16, 24) // ["a", "b"]
    var bombo4 =  myjson.slice(24,32);

    $.each(bombo1, function( key, value ) {
        html += '<tr>';
        if(bombo1[key].name==host)
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
      $('#table').append(html);
    
    }); // end doc ready


function cambiar(bombo,key){    
    return "  ("+bombo[key].points +") points";
}

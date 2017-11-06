$(document).ready(function () {

    var myjson = JSON.parse(localStorage.getItem("clasificadosPrueba"));
    var host = localStorage.getItem("host");
    var tr;
    myjson.sort((a, b) => Number(b.points) - Number(a.points));

    for (var i = 0; i < myjson.length; i++) {
        if(i<8){
            tr = $('<tr/>');
            tr.append("<td>"+(i+1+".  ")+"<img src="+myjson[i].flag+" width='60' height='40'>"+myjson[i].name+"</td>");
            $('table').append(tr);
        }
    
    }
           
        /* --- sort Table click --*/
        
 //   $("table").tablesorter( {sortList: [ [1,0]]} ); //This tells tablesorter to sort on the NAME column in ascending order.

 
    }); // end doc ready




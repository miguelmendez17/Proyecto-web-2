$(document).ready(function () {

    var myjson = JSON.parse(localStorage.getItem("directos"));
    var hola = "hoasd";
    var tr;
    for (var i = 0; i < myjson.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>"+(i+1+".  ")+"<img src="+myjson[i].flag+" width='60' height='40'>"+myjson[i].name+"</td>");
        tr.append("<td>" + myjson[i].name + "</td>")
        tr.append("<td>" + myjson[i].result + "</td>");
        tr.append("<td>" + hola + "</td>");// editable
        $('table').append(tr);
    }
           
        /* --- sort Table click --*/
        
 //   $("table").tablesorter( {sortList: [ [1,0]]} ); //This tells tablesorter to sort on the NAME column in ascending order.

 
    }); // end doc ready




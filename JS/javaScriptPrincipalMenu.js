$(document).ready(function(){
    var categorias = new Array("CAF","CONCACAF","CONMEBOL","OFC","AFC","UEFA");
    $.each(categorias, function(index, value){
        $("#loadConfederations").append($("<option>", {text : value
        }));
    });
});


function view(divID)
{
    var variables=new Array("home","addCountry","updateCountry","diableCountry","enableCountry");

    for (i=0;i<variables.length;i++){
        if(divID==i+1){
            document.getElementById(variables[i]).style.display = 'block';
        }
        else{
            document.getElementById(variables[i]).style.display = 'none';
        }
    }
}



$("#home").click(function(){
    alert("entra");
   /* $.ajax({
        url: 'PHP/prueba.php',
        type: 'GET',
        data: 'iduser=12345',
        success: function(data) {
            alert(data);
    },
        error: function(){
            alert('Error!');
    }
});*/
});





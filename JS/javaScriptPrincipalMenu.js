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

function addCountry(){
    var countryName = $("#countryName").val();
    var countryPoints = $("#pointsCountry").val();
    var countryImage = $("#countryImage").val();
    var loadConfederations = $("#loadConfederations").val();
    $.ajax({
        url: "PHP/addCountry.php?",
        type: "post",
        data: {name:countryName, points:countryPoints, 
               image: countryImage, confederations:loadConfederations},
        success: function(data){
            alert(data); 
       }
    });

    $("countryName").empty();
    $("#pointsCountry").empty();
    $("#countryImage").empty();
}






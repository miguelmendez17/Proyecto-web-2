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


function updateCountry(){
    $.get("./PHP/updateCountry.php", function(datas){
        var countries = JSON.parse(datas);
        $.each(countries, function(index, value){
            $("#countryNameUpdate").append($("<option>", {text : value.country
        }));
    });

});
}


$(document).on('click', '#btnSearch', function () {
    var countryName = $("#countryNameUpdate").val();
    $.ajax({
        url: "./PHP/showInformation.php?",
        type: "post",
        data: {name:countryName},
        success: function(data){
            var country = JSON.parse(data);
            $('#countryImageUpdate').val(country[0].flag);
            $('#pointsCountryUpdate').val(country[0].points);
            $('#img-Update').attr('src',country[0].flag);
       }
    });
});



$(document).on('click', '#btnUpdate', function () {
    var countryImage = $("#countryImageUpdate").val();
    var countryPoints = $("#pointsCountryUpdate").val();
    var countryName = $("#countryNameUpdate").val();
    $.ajax({
        url: "./PHP/updateCountryFinal.php?",
        type: "post",
        data: {countryIMG: countryImage, countryP: countryPoints,countryN: countryName},
        success: function(data){
            alert(data);
       }
    });
});








//función para cargar las categorias disponibles..
$(document).ready(function(){
    var categorias = new Array("CAF","CONCACAF","CONMEBOL","OFC","AFC","UEFA");
    $.each(categorias, function(index, value){
        $("#loadConfederations").append($("<option>", {text : value
        }));
    });
});


//función auxiliar que sirve para activar un div y desactivar los otros
//esos ids están especificados en la variable "variables"
function view(divID)
{
    var variables=new Array("home","addCountry","updateCountry","diableCountry","enableCountry","newTournament","chooseHostID");

    for (i=0;i<variables.length;i++){
        if(divID==i+1){
            document.getElementById(variables[i]).style.display = 'block';
        }
        else{
            document.getElementById(variables[i]).style.display = 'none';
        }
    }
}



//esta es la función para agregar el nombre de host al localStorage
//valida que de verdad se haya seleccionado un host. Y muestra la otar vista
$(document).on('click', '#btn-addHost', function () {
    localStorage.removeItem("host");
    localStorage.removeItem("directos");
    localStorage.removeItem("repechajes");
    var found = $("#host").find("img");
    if (found.length == 0) {
        return;
    }            

    else{
        $('#host img').each(function(){
            var nombre = $(this).attr('id');
            localStorage.setItem("host",nombre);
        })
        $('#ALLCountries').empty();
        loadTEAMSNewTour();
        view(6);  
    }
  
});


//función que sirve para agregar un país
//con sus respectivos datos que se necesita para agregar un país.
function addCountry(){
    var countryName = $("#countryName").val();
    var countryPoints = $("#pointsCountry").val();
    var countryImage = $("#countryImage").val();

    if(countryName=="" || countryPoints=="" ||countryImage==""){
        alert("You must complete all the fields");
        return;
    }

    var loadConfederations = $("#loadConfederations").val();
    $.ajax({
        url: "PHP/addCountry.php?",
        type: "post",
        dataType: "text",
        async:false,  //de alguna manera es importante decirle que no es asincronico para que sirva.
        data: {name:countryName, points:countryPoints, 
               image: countryImage, confederations:loadConfederations},
        success: function(datas){
            alert(datas); 
       },
    });
    $("#countryName").empty();
    $("#pointsCountry").empty();
    $("#countryImage").empty();
}


//función para obtener los países que se pueden editar en el select.
function updateCountry(){
        $.ajax({ 
            type: "GET", 
            url: './PHP/updateCountry.php',
            data: {peticion:"updateCargar"}, 
            async:false,  
            success: function(data) {  
                var countries = JSON.parse(data);
                $.each(countries, function(index, value){
                    $("#countryNameUpdate").append($("<option>", {text : value.country
                }));   
                });  
        }
        }); 
}

//este carga la lista de paises activos disponibles, y que se quieren inactivar
function updateCountryDisable(){
    $('#countryNameToDisable').empty();
    $.ajax({ 
        type: "GET", 
        url: './PHP/updateCountry.php',
        data: {peticion:"updateDisable"},   
        success: function(data) {  
            var countries = JSON.parse(data);
            $.each(countries, function(index, value){
                $("#countryNameToDisable").append($("<option>", {text : value.country
            }));   
            });  
        }
    }); 
}

//este carga la lista de paises inactivos disponibles, y que se quieren activar
function updateCountryEnable(){
    $("#countryNameToActivate").empty();
    $.ajax({ 
        type: "GET", 
        url: './PHP/updateCountry.php',
        data: {peticion:"updateEnable"},   
        success: function(data) {  
            var countries = JSON.parse(data);
            $.each(countries, function(index, value){
                $("#countryNameToActivate").append($("<option>", {text : value.country
            }));   
            });  
        }
    }); 
}


//necesitamos la información proveniente de un país en específico
//para que cuando le dé click al btnSearch se muestre la información de ese país
//para posteriormente poder modificarlo.
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


//este es el botón de modificar, cuando ya está seguro de la modificación de un país
//para luego guardarlo en base de datos. Verifica que no se dejen espacios en blanco.
$(document).on('click', '#btnUpdate', function () {
    var countryImage = $("#countryImageUpdate").val();
    var countryPoints = $("#pointsCountryUpdate").val();
    var countryName = $("#countryNameUpdate").val();

    if(countryImage==""||countryPoints==""){
        return;
    }

    $.ajax({
        url: "./PHP/updateCountryFinal.php?",
        type: "post",
        async:false, 
        data: {countryIMG: countryImage, countryP: countryPoints,countryN: countryName},
        success: function(data){
            alert(data);
       }
    });

    $("#countryImageUpdate").empty();
    $("#pointsCountryUpdate").empty();
});







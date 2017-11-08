
$(document).on('click', '#btn-register', function () {
    location.href="register.html"; //dirige a archivo 
});

$(document).on('click', '#cancel-register', function () {
    location.href="index.html"; //dirige al index cuando se le da cancelar.
});



$(document).on('click', '#btn-login', function () {
   	var userNameField = $("#fieldUsername").val(); 
    var passwordField = $("#fieldPassword").val();

    //en click login valida que no se pueda ingresar espacios en blanco.
    if(userNameField=="" || passwordField==""){
    	return;
    }

   	$.ajax({
   		type: "POST",
	    url: '/PHP/login.php',
	    data: {user: userNameField, password: password},
		    success: function(response) {
		    	if(response=="ok"){
		    		location.href="menuPrincipal.html";
		    	}
		       
		    },
		    error: function(xhr) {
		        alert("no sirve");
		    }
	});
});



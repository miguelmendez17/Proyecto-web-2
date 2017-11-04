
$(document).on('click', '#btn-register', function () {
    location.href="register.html";
});

$(document).on('click', '#cancel-register', function () {
    location.href="index.html";
});



$(document).on('click', '#btn-login', function () {
   	var userNameField = $("#fieldUsername").val();
    var passwordField = $("#fieldPassword").val();

    if(userNameField==""||passwordField==""){
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

   	alert("termina");
});



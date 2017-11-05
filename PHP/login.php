<?php

include './connectionPHP.php';

	$connectionConflict  = 'http://localhost:8012/xampp/Proyecto-web-2/menuPrincipal.html';

//si el valor es del boton login, entonces hace todo lo que está aquí dentro.
if (isset($_REQUEST['btn-login']))
{
	$username=$_REQUEST['fieldUsername'];
	$password=$_REQUEST['fieldPassword'];

    $query = "select nombreDeUsuario,contrasenna from usuarios where nombreDeUsuario='$username'";

	$result = pg_query($globalConnection, $query);
	
	$rows = pg_num_rows($result);

	if ($rows==0) {
		//recargar la pagina y lo deja en la misma, para que vuelva a ingresar datos para verificar sesión.
		devuelveMismaPaginaIndex($connectionConflict);
	}

	$arr = pg_fetch_all($result);
	
	if (is_array($arr))
	{
		//valida el inicio de sesión conforme a lo que digitó el usuario.. 
    	foreach($arr as $array){
			if($array['nombredeusuario'] == $username && $array['contrasenna']==$password)
			{
				echo "<script>";
        		echo "window.location = 'http://localhost:8012/xampp/Proyecto-web-2/menuPrincipal.html'";
        		echo "</script>";    
        		return;
			}
		}
	}
	devuelveMismaPaginaIndex($connectionConflict);
}

//función que devuelve a la pagina index, o sea, al login.
function devuelveMismaPaginaIndex($connectionConflict){
	echo "<script>";
	echo "alert('Invalid username or password');"; 
    echo "window.location = 'http://localhost/Proyecto Web 2/index.html'";
    echo "</script>";  
    return;
}

?>
<?php

include './connectionPHP.php';

	$connectionConflict  = 'http://localhost:8012/xampp/Proyecto-web-2/menuPrincipal.html';

if (isset($_REQUEST['btn-login']))
{
	$username=$_REQUEST['fieldUsername'];
	$password=$_REQUEST['fieldPassword'];

    $query = "select nombreDeUsuario,contrasenna from usuarios where nombreDeUsuario='$username'";

	$result = pg_query($globalConnection, $query);
	
	$rows = pg_num_rows($result);

	if ($rows==0) {
		devuelveMismaPaginaIndex($connectionConflict);
	}

	$arr = pg_fetch_all($result);
	
	if (is_array($arr))
	{
    	foreach($arr as $array){
			if($array['nombredeusuario'] == $username && $array['contrasenna']==$password)
			{
				echo "<script>";
        		echo "window.location = '" .$connectionConflict."'";
        		echo "</script>";    
        		return;
			}
		}
	}
	devuelveMismaPaginaIndex($connectionConflict);
}


function devuelveMismaPaginaIndex($connectionConflict){
	echo "<script>";
	echo "alert('Invalid username or password');"; 
    echo "window.location = '" .$connectionConflict."'";
    echo "</script>";  
    return;
}

?>
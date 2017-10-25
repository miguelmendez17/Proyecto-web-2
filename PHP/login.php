<?php

include './connectionPHP.php';

if (isset($_REQUEST['btn-login']))
{
	$username=$_REQUEST['fieldUsername'];
	$password=$_REQUEST['fieldPassword'];


    $query = "select nombreDeUsuario,contrasenna from usuarios where nombreDeUsuario='$username'";

	$result = pg_query($globalConnection, $query);
	if (!$result) {
	    echo "An error occurred.\n";
	    exit;
	}

	$arr = pg_fetch_all($result);
    $test  = 0;
	$prueba = $arr[0];

	print_r($prueba['nombredeusuario']);
	}

?>

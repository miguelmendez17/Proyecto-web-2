<?php 

include './connectionPHP.php';

	//aquí está el valor del país a modificar
	$countryNameDisable=$_REQUEST['countryNameToDisable'];

    $query = "select Country from TEAMS where Country='$countryNameDisable'";

	$result = pg_query($globalConnection, $query);
	
	$rows = pg_num_rows($result);

	if ($rows>0) {
		//este es el query para pasar un país activo a inactivarlo.. solo si existe ese pais.
		$queryUpdate = "update TEAMS set activated=FALSE where Country = '$countryNameDisable'"; 

	    $result=pg_query($globalConnection,$queryUpdate);

	   	$message = "Ok, now " .$countryNameDisable." is inactive";
        echo "<script>";
        echo "alert('$message');";  
        echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
        echo "</script>";   
		
	}

    else{
    	//se envía el mensaje de que no existe ese país.
    	$message = "Sorry, that country does not exist";
        echo "<script>";
        echo "alert('$message');";  
        echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
        echo "</script>";   
	} 
	pg_close($globalConnection);
 ?>
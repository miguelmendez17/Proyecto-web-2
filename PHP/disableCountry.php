<?php 

include './connectionPHP.php';

	$countryNameDisable=$_REQUEST['countryNameToDisable'];

    $query = "select Country from TEAMS where Country='$countryNameDisable'";

	$result = pg_query($globalConnection, $query);
	
	$rows = pg_num_rows($result);

	if ($rows>0) {
		$queryUpdate = "update TEAMS set activated=FALSE where Country = '$countryNameDisable'"; 

	    $result=pg_query($globalConnection,$queryUpdate);

	   	$message = "Ok, now " .$countryNameDisable." is inactive";
        echo "<script>";
        echo "alert('$message');";  
        echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
        echo "</script>";   
		
	}

    else{
    	$message = "Sorry, that country does not exist";
        echo "<script>";
        echo "alert('$message');";  
        echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
        echo "</script>";   
	} 
	pg_close($globalConnection);
 ?>
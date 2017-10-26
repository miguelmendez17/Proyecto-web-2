<?php 

include './connectionPHP.php';

	$countryName=$_REQUEST['countryName'];
	$countryPoints=$_REQUEST['countryPoints'];
	$countryImage = $_REQUEST['countryImage'];
	$countryConfederation = $_REQUEST['countryConfederation'];

    $query = "select Country from TEAMS where Country='$countryName'";

	$result = pg_query($globalConnection, $query);
	
	$rows = pg_num_rows($result);

	if ($rows>0) {
		$message = "That country already exists";
        echo "<script>";
        echo "alert('$message');";  
        echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
        echo "</script>";  
	}

    else{
		$queryAddFlag = "insert into Flags VALUES ('$countryName','$countryImage');";
		$queryAddCountry ="insert into TEAMS values('$countryName','$countryConfederation','$countryPoints');";

	    $result1=pg_query($globalConnection,$queryAddCountry);
	    $result2=pg_query($globalConnection,$queryAddFlag);

	    $mensaje = "Inserted successfully";
	    echo "<script>";
	    echo "alert('$mensaje');";  
	    echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
	    echo "</script>";   
	} 
	
 ?>
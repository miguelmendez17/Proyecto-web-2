<?php 

include './connectionPHP.php';

	$countryName = $_POST['name'];
	$countryPoints = $_POST['points'];
	$countryImage = $_POST['image'];
	$countryConfederation = $_POST['confederations'];

 	$query = "select Country from TEAMS where Country='$countryName'";

	$result = pg_query($globalConnection, $query);
	
	$rows = pg_num_rows($result);
	
	if($rows>0){	
		echo "That country already exists";
	} 

	else{
		$activated = TRUE;
		$queryAddFlag = "insert into Flags VALUES ('$countryName','$countryImage');";
		$queryAddCountry ="insert into TEAMS values('$countryName','$countryConfederation','$countryPoints','$activated');";

	    $result1=pg_query($globalConnection,$queryAddCountry);
	    $result2=pg_query($globalConnection,$queryAddFlag);
	    
	     echo json_encode("Inserted successfully", JSON_FORCE_OBJECT);
	}	

?>
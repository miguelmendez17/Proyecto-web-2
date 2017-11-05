<?php 

include './connectionPHP.php';

	$countryName = $_POST['name'];
	$countryPoints = $_POST['points'];
	$countryImage = $_POST['image'];
	$countryConfederation = $_POST['confederations'];

	//query para comprobar si el nombre existe en la base de datos. Ya que no debería repetirse
 	$query = "select Country from TEAMS where Country='$countryName'";

	$result = pg_query($globalConnection, $query);
	
	$rows = pg_num_rows($result);
	
	if($rows>0){	
		//si hay resultado, o sea, si el nombre existe, entonces se envía el mensaje..
		echo "That country already exists";
	} 

	else{
		//si no existe el nombre de ese país, se va a agregar a la bases de datos con estos querys.
		$activated = TRUE;
		$queryAddFlag = "insert into Flags VALUES ('$countryName','$countryImage');";
		$queryAddCountry ="insert into TEAMS values('$countryName','$countryConfederation','$countryPoints','$activated');";

	    $result1=pg_query($globalConnection,$queryAddCountry);
	    $result2=pg_query($globalConnection,$queryAddFlag);

	    //envía el mensaje, para comprobar que el resultado fue exitoso.
	     echo json_encode("Inserted successfully", JSON_FORCE_OBJECT);
	}	

?>
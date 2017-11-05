<?php 
include './connectionPHP.php';

	//datos que ingresó el usuario
 	$countryIMG = $_POST['countryIMG'];
	$countryP = $_POST['countryP'];
	$countryN = $_POST['countryN'];

	//el nombre de country no se puede cambiar, así que se actualizan los demás datos con respecto a lo que escribió el usuario.
	$queryUpdatePoints = "update TEAMS set Points=$countryP where Country = '$countryN';";
	$queryUpdateFlags ="update Flags set flag='$countryIMG' where name = '$countryN';";

	//query para meterlo en base de datos.
    $result1=pg_query($globalConnection,$queryUpdatePoints);
    $result2=pg_query($globalConnection,$queryUpdateFlags);

    //envía mensaje de éxito..
	echo json_encode("Modified successfully");
?>
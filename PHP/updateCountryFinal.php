<?php 
include './connectionPHP.php';

 	$countryIMG = $_POST['countryIMG'];
	$countryP = $_POST['countryP'];
	$countryN = $_POST['countryN'];

	$queryUpdatePoints = "update TEAMS set Points=$countryP where Country = '$countryN';";
	$queryUpdateFlags ="update Flags set flag='$countryIMG' where name = '$countryN';";

    $result1=pg_query($globalConnection,$queryUpdatePoints);
    $result2=pg_query($globalConnection,$queryUpdateFlags);

	echo json_encode("Modified successfully");
?>
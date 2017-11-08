<?php 
include './connectionPHP.php';

	//trae el nombre del país a mostrar información..
	$countryName = $_POST['name'];
 	$query = "select * from flags as f
 			inner join
 			TEAMS as t on (f.name=t.Country and f.name='$countryName')";
	$result = pg_query($globalConnection, $query);
	$rows = pg_num_rows($result);
	
	if($rows>0){	
		$arr = pg_fetch_all($result);
		echo json_encode($arr, JSON_FORCE_OBJECT);
		
	} 
	else{
		echo "Error, no country data";
	}	
?>
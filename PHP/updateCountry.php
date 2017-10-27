<?php 

include './connectionPHP.php';

 	$query = "select Country from TEAMS";
	$result = pg_query($globalConnection, $query);
	$rows = pg_num_rows($result);
	
	if($rows>0){	
		$arr = pg_fetch_all($result);
		echo json_encode($arr);
		
	} 
	else{
		echo "Error, no country data";
	}	
?>
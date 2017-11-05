<?php 

include './connectionPHP.php';

	$request = $_GET['peticion'];

	if($request=="updateCargar"){
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
	}


	if($request=="updateDisable"){
		$query = "select Country from TEAMS where(activated='TRUE')";
		$result = pg_query($globalConnection, $query);
		$rows = pg_num_rows($result);

		if($rows>0){	
			$arr = pg_fetch_all($result);
			echo json_encode($arr);
		} 
		else{
			echo "Error, no country data";
		}	
	}

	if($request=="updateEnable"){
		$query = "select Country from TEAMS where(activated='FALSE')";
		$result = pg_query($globalConnection, $query);
		$rows = pg_num_rows($result);

		if($rows>0){	
			$arr = pg_fetch_all($result);
			echo json_encode($arr);
		} 
		else{
			echo "Error, no country data";
		}	
	}


		
?>
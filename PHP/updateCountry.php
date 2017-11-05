<?php 

include './connectionPHP.php';

	//la variable que lleva el control del tipo de petición..
	$request = $_GET['peticion'];


	//en este se carga en un select todos los países disponibles, para poder modificarlos.
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

	//en este se carga en un select todos los países que están activos, para posteriormente inactivarlos.
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

	//en este se carga en un select todos los países que están inactivos, para posteriormente activarlos.
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
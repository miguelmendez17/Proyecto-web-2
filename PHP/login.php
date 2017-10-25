<?php

include './connectionPHP.php';

if (isset($_REQUEST['btn-login']))
{
	$username=$_REQUEST['fieldUsername'];
	$password=$_REQUEST['fieldPassword'];


    $query = "select nombreDeUsuario,contrasenna from usuarios where nombreDeUsuario='$username'";
  //  $result=pg_query($globalConnection,$query);
  //  $rows = pg_numrows($result);

	  $result=pg_query($conn, $query);
	  if  (!$result) {
	   echo "query did not execute";
	  }
	  if ($line = pg_fetch_assoc($result)) {
	  	if ($line['rows'] == 0) {
	    	echo "0 records";
	    }
	  }
	  else {
	   while ($row = pg_fetch_array($result)) {
	   		echo $row;
	   }
	  }
}

 ?>

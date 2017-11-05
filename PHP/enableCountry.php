<?php 

include './connectionPHP.php';

$countryNameEnable=$_REQUEST['countryNameToActivate'];

$query = "select Country from TEAMS where Country='$countryNameEnable'";

$result = pg_query($globalConnection, $query);

$rows = pg_num_rows($result);


if ($rows>0) {
	$queryUpdate = "update TEAMS set activated=TRUE where Country = '$countryNameEnable'"; 

    $result=pg_query($globalConnection,$queryUpdate);

   	$message = "Ok, now " .$countryNameEnable." was activated";
    echo "<script>";
    echo "alert('$message');";  
    echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
    echo "</script>";   
}

else{
	$message = "Sorry, that country does not exist";
    echo "<script>";
    echo "alert('$message');";  
    echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
    echo "</script>";   
} 

 ?>
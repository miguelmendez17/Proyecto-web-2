<?php 

include './connectionPHP.php';

    //aquí está el valor del país a modificar
$countryNameEnable=$_REQUEST['countryNameToActivate'];

$query = "select Country from TEAMS where Country='$countryNameEnable'";

$result = pg_query($globalConnection, $query);

$rows = pg_num_rows($result);


if ($rows>0) {
    //este es el query para pasar un país inactivo a activo.. solo si existe ese pais.
	$queryUpdate = "update TEAMS set activated=TRUE where Country = '$countryNameEnable'"; 

    $result=pg_query($globalConnection,$queryUpdate);

   	$message = "Ok, now " .$countryNameEnable." was activated";
    echo "<script>";
    echo "alert('$message');";  
    echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
    echo "</script>";   
}

else{
        //se envía el mensaje de que no existe ese país.
	$message = "Sorry, that country does not exist";
    echo "<script>";
    echo "alert('$message');";  
    echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
    echo "</script>";   
} 

 ?>
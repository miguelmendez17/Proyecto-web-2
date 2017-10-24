<?php 

include './connectionPHP.php';

if (isset($_REQUEST['btn-login']))
{
	$username=$_REQUEST['fieldUsername'];
    $password=$_REQUEST['fieldPassword'];


    $query = "select nombreDeUsuario,contrasenna from usuarios where nombreDeUsuario='$username'";
    $result=pg_query($globalConnection,$query);
    $rows = pg_numrows($result);


    echo $result;
  //  $respuesta=  json_encode(pg_fetch_all($result));
   
//    echo ($respuesta);

}

 ?>
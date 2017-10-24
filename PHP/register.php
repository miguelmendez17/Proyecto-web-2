<?php 

include './connectionPHP.php';

if (isset($_REQUEST['cancelRegister']))
{
    header($redirectToIndex,false);
}


if (isset($_REQUEST['registrarUsuario']))
{
    $name=$_REQUEST['name'];
    $lastName=$_REQUEST['lastName'];
    $age=$_REQUEST['age'];
    $username=$_REQUEST['username'];
    $password =$_REQUEST['password'];


    $query = "select nombreDeUsuario from usuarios where nombreDeUsuario='$username'";
    $result=pg_query($globalConnection,$query);
    $rows = pg_numrows($result);

  	if ($rows>0){
        $mensaje = "That user already exists";
        echo "<script>";
        echo "alert('$mensaje');";  
        echo "window.location = 'http://localhost/Proyecto Web 2/register.html';";
        echo "</script>";  
    }

    else{
    	$now = "now()";
    	$queryAgregar = "insert into usuarios values ('$name','$lastName','$age','$username', '$password','$now', '$now');";
        $result2=pg_query($globalConnection,$queryAgregar);

        $mensaje = "Inserted successfully";
        echo "<script>";
        echo "alert('$mensaje');";  
        echo "window.location = 'http://localhost/Proyecto Web 2/index.html';";
        echo "</script>";    
    } 

  
}
pg_close($globalConnection);
 
 ?>
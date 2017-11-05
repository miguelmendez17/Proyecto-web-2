<?php 

include './connectionPHP.php';

//si pulsa el botón cancelar, lo dirige al login.
if (isset($_REQUEST['cancelRegister']))
{
    echo "<script>";
    echo "window.location = 'http://localhost/Proyecto Web 2/index.html';";
    echo "</script>";  
}

//si presiona el botón registar un usuario, lo dirige a esta función.
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
        //muestra mensaje de que ya ese usuario existe en el sistema.
        $mensaje = "That user already exists";
        echo "<script>";
        echo "alert('$mensaje');";  
        echo "window.location = 'http://localhost/Proyecto Web 2/register.html';";
        echo "</script>";  
    }

    else{
        //guarda el usuario con respecto a lo que digitó en el formulario. Envía mensaje de éxito
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
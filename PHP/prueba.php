<?php 

include './connectionPHP.php';

$query = "select * from flags as f inner join TEAMS as t on (f.name = t.Country) order by t.points DESC limit 100";

$result = pg_query($globalConnection, $query);

$rows = pg_num_rows($result);


if ($rows>0) {
	$message = "Ok, now " .$countryNameEnable." was activated";
	echo "<table>";
	echo 	"<tr>";
	echo 		"<td><strong>curso</strong></td>"; 
	echo 		"<td><strong>horas</strong></td>"; 
	echo 		"<td><strong>horario</strong></td>"; 
	echo 	"</tr";
	echo "</table>"; 

else{
	$message = "Fatal Error";
    echo "<script>";
    echo "alert('$message');";  
    echo "window.location = 'http://localhost/Proyecto Web 2/menuPrincipal.html';";
    echo "</script>";   
} 

?>
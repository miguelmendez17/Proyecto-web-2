<?php

include './connectionPHP.php';

    $query = "select * from flags as f inner join TEAMS as t on (f.name = t.Country and t.activated=TRUE) order by t.points DESC limit 100";

	$result = pg_query($globalConnection, $query);

	$rows = pg_num_rows($result);

	if ($rows==0) {
		echo "NO HAY";
	}

	$arr = pg_fetch_all($result);

	if (is_array($arr)){

	    echo json_encode($arr, JSON_FORCE_OBJECT);
	}


?>
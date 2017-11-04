<?php
    include './connectionPHP.php';


    $confederacion = $_POST['countryN'];

    $queryUpdatePoints = "SELECT TEAMS.country, flags.flag, confederations.id FROM TEAMS INNER JOIN flags ON TEAMS.country = flags.name INNER JOIN confederations ON confederations.id = TEAMS.confederation and confederations.id = '$confederacion'";


    $result=pg_query($globalConnection,$queryUpdatePoints);

    $rows = pg_num_rows($result);

    if ($rows==0) {
        echo "NO HAY";
    }

    $arr = pg_fetch_all($result);

    if (is_array($arr)){

        echo json_encode($arr, JSON_FORCE_OBJECT);
    }

?>
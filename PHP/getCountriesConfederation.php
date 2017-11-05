<?php
    include './connectionPHP.php';


    $confederacion = $_POST['countryN'];
    $allcountries = $_POST['allcountries'];

    if ($allcountries=="no"){
        $queryUpdatePoints = "SELECT TEAMS.country, flags.flag, confederations.id
                    FROM TEAMS INNER JOIN flags ON TEAMS.country = flags.name INNER JOIN confederations
                    ON confederations.id = TEAMS.confederation and confederations.id = '$confederacion'";
        $result=pg_query($globalConnection,$queryUpdatePoints);

        $rows = pg_num_rows($result);

        if ($rows==0) {
            echo "NO HAY";
            return;
        }

        $arr = pg_fetch_all($result);

        if (is_array($arr)){
            echo json_encode($arr);
        }
    }

    if($allcountries=="yes"){
        $queryUpdatePoints = "select f.flag,f.name from Flags as f inner join TEAMS as t on (t.activated='TRUE' and f.name=t.Country)";
        $result=pg_query($globalConnection,$queryUpdatePoints);
        $rows = pg_num_rows($result);
        if ($rows==0) {
            echo "NO HAY";
            return;
        }

        $arr = pg_fetch_all($result);

        if (is_array($arr)){
            echo json_encode($arr);
        }
    }


?>
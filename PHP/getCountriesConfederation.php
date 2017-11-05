<?php
    include './connectionPHP.php';


    //aquí recibe el id de la confederación.
    $confederacion = $_POST['countryN'];
    //este se encarga de ver si esta variable necesita que envíe todas las banderas o si lo necesita por categoría.
    $allcountries = $_POST['allcountries'];

    if ($allcountries=="no"){
        //envía la lista de todas las confederaciones, con sus respectivos países, banderas, etc.
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
            //envía a ajax
            echo json_encode($arr);
        }
    }

    if($allcountries=="yes"){
        //aquí envía la lista de todos las banderas o todos los países que están activos en el sistema.
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
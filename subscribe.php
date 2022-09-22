<?php

    if(!empty($_POST))
    {
        $host = 'mysql.hostinger.in';
        $username = 'u998161249_hblog';
        $db_password = 'hexad@123';
        $database = 'u998161249_hblog';
        $table = 'subcription';
        $redirect_to = 'http://localhost:901/honeycomb/';
        $link = mysqli_connect($host,$username,$db_password,$database); 
        $email = $_POST['email'];
        $sql = "SELECT email FROM ".$table." WHERE email = '".$email."'";
        $rSQL = mysqli_query($link, $sql);
        $aSQL = mysqli_fetch_assoc($rSQL);
        if(empty($aSQL))
        {
            $insert_sql = "INSERT INTO ".$table." (email,timestamp) VALUES ('".$email."','".time()."')";
            mysqli_query($link, $insert_sql);
        }
        //header("Location:".$redirect_to);
    }
    

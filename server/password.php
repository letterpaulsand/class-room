<?php
header('Access-Control-Allow-Origin:*');
// --------------------------------------------------------------------------------------------------------------------
$sqlhost = 'localhost';
$user = 'root';
$password = 'mouse0609';
$dbname = 'class';
// --------------------------------------------------------------------------------------------------------------------
$passwordget = $_GET['password'];
$auth = $_GET['auth'];

// connect sql
$connent = new mysqli($sqlhost, $user, $password, $dbname);

// catch error
if ($connent->connect_error) {
    die('error');
}


if($connent){
    $sql = "UPDATE `config` SET `password`= '$passwordget',`auth`= '$auth' WHERE 1";
    $result = mysqli_query($connent, $sql);
    if($result){
        echo "ok";
    }else{
        echo "$password and $auth";
    }
}
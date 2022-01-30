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


if ($connent) {
    if ($auth == 'signout') {
        $sql = "UPDATE `config` SET `ok`= '0' WHERE 1";
        $result = mysqli_query($connent, $sql);
        if ($result) {
            echo "ok";
        } else {
            echo "error";
        }
    } else {
        $sql = "UPDATE `config` SET `password`= '$passwordget',`auth`= '$auth' WHERE 1";
        $result = mysqli_query($connent, $sql);
        if ($result) {
            $sql1 = "UPDATE `config` SET `ok`= '1' WHERE 1";
            $result1 = mysqli_query($connent, $sql);
            if ($result1) {
                echo "ok";
            } else {
                echo "error";
            }
        } else {
            echo "$password and $auth";
        }
    }
}

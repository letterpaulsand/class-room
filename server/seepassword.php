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
    $sql = "SELECT * FROM `config`";
    $result = $connent->query($sql);
    $data = [];

    if ($result->num_rows > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($data, $row);
        }
    } else {
        echo "error";
    }
    $connent->close();
    $getauth = $data[0]['auth'];
    $getpassword = $data[0]['password'];
    $ok = $data[0]['ok'];
    if($getpassword == $passwordget && $getauth == $auth){
        echo '';
    }elseif($getpassword == $passwordget){
        echo $getauth;
    }elseif($getauth == $auth){
        echo '';
    }else{
        echo 'password error';
    }
}

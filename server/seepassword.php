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
    $getauth = $data[0]['auth'];
    $getpassword = $data[0]['password'];
    $ok = $data[0]['ok'];
    if ($ok == 1) {
        echo "password error";
    } else {
        
        if ($getpassword == $passwordget && $getauth == $auth) {
            $sql1 = "UPDATE `config` SET `ok`= '1' WHERE 1";
            $result1 = mysqli_query($connent, $sql1);
            if ($result1) {
                echo "";
            } else {
                echo "error";
            }
        } elseif ($getpassword == $passwordget) {
            echo $getauth;
            $sql1 = "UPDATE `config` SET `ok`= '1' WHERE 1";
            $result1 = mysqli_query($connent, $sql1);
            if ($result1) {
            } else {
            }
        } elseif ($getauth == $auth) {
            $sql1 = "UPDATE `config` SET `ok`= '1' WHERE 1";
            $result1 = mysqli_query($connent, $sql1);
            if ($result1) {
                echo "";
            } else {
                echo "error";
            }
        } else {
            echo 'password error';
        }
    }
}
$connent->close();

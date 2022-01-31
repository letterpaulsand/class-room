<?php
// write header
header('Access-Control-Allow-Origin:*');
// --------------------------------------------------------------------------------------------------------------------
$sqlhost = 'localhost';
$user = 'root';
$password = 'mouse0609';
$dbname = 'class';
// --------------------------------------------------------------------------------------------------------------------
$id = $_GET['id'];
$date = $_GET['date'];

$connent = new mysqli($sqlhost, $user, $password, $dbname);

// catch error
if ($connent->connect_error) {
    die('error');
}

$sql = "DELETE FROM `$date` WHERE id = $id";
$result = mysqli_query($connent, $sql);
if($result){
    echo "ok";
}else{
    echo "error";
}
<?php
// write header
header('Access-Control-Allow-Origin:*');
// --------------------------------------------------------------------------------------------------------------------
$sqlhost = 'localhost';
$user = 'root';
$password = 'mouse0609';
$dbname = 'class';
// --------------------------------------------------------------------------------------------------------------------


$date = $_GET['date'];


$connent = new mysqli($sqlhost, $user, $password, $dbname);

if ($connent->connect_error) {
    echo "2";
}

$sql = "SELECT * FROM `$date`";
$result = $connent->query($sql);
$data = [];

if ($result->num_rows > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($data, $row);
    }
}else{
    echo "2";
}
$connent->close();
$data = json_encode($data);
echo $data;

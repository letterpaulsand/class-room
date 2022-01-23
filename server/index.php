<?php
header('Access-Control-Allow-Origin:*');
$sqlhost = 'localhost';
$user ='root';
$password = 'mouse0609';
$dbname = 'class';
// get GET start
$sendlist = $_GET['sendlist'];
$sendjob = $_GET['sendjob'];
$sendbook = $_GET['sendbook'];
$jobdate = $_GET['jobdate'];
$page = $_GET['page'];
$des = $_GET['des'];
$year = $_GET['year'];
$month = $_GET['month'];
$date = $_GET['date'];
$day = $_GET['day'];
// get GET end
$table = $year.$month.$date;

// connect sql
$connent = mysqli_connect($sqlhost,$user,$password,$dbname);
if($connent){
    $creattable = "CREATE TABLE  $table (sendlist TEXT(4),sendjob TEXT(4),sendbook TEXT(10),jobdate TEXT(20),page TEXT(30),des TEXT(100),year TEXT(10),month TEXT(2),date TEXT(2),day TEXT(1))";
    if(mysqli_query($link,$creattable)){
        echo 'ok';
    }else{
        echo 'error';
    };
}else {
    echo "database error :" . mysqli_connect_error();
};


echo $sendlist, $sendjob, $sendbook, $jobdate, $page, $des, $year, $month, $date, $day;
?>
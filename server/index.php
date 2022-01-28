<?php
// write header
header('Access-Control-Allow-Origin:*');
// --------------------------------------------------------------------------------------------------------------------
$sqlhost = 'localhost';
$user = 'root';
$password = 'mouse0609';
$dbname = 'class';
// --------------------------------------------------------------------------------------------------------------------

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

// get time
$table = "$year-$month-$date";

// connect sql
$connent = new mysqli($sqlhost, $user, $password, $dbname);

// catch error
if ($connent->connect_error) {
    die('error');
}


if ($connent) {

    // creattable sql start
    $creattable = "CREATE TABLE `$table` (
        sendlist TEXT(4),
        sendjob TEXT(4),
        sendbook TEXT(10),
        jobdate TEXT(20),
        pages TEXT(30),
        dess TEXT(100),
        years TEXT(10),
        months TEXT(2),
        dates TEXT(2),
        dayss TEXT(1)
        )";
    // creattable sql end

    if ($connent->query($creattable) === TRUE) {
    } else {
    }

    // insert sql start
    $creatdata = "INSERT INTO `$table`(
        `sendlist`, 
        `sendjob`, 
        `sendbook`, 
        `jobdate`, 
        `pages`, 
        `dess`, 
        `years`, 
        `months`, 
        `dates`, 
        `dayss`
        ) VALUES (
            '$sendlist',
            '$sendjob',
            '$sendbook',
            '$jobdate',
            '$page',
            '$des',
            '$year',
            '$month',
            '$date',
            '$day'
            )";
        // insert sql end

        // insert into 
        $result = mysqli_query($connent, $creatdata);
        echo '1';


} else {
    echo false;
};

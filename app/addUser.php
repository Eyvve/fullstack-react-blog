<?php

require './dbConnect.php';
require './tokenGenerator.php';
require './cors.php';

$username = $_SERVER['PHP_AUTH_USER'];
$password = $_SERVER['PHP_AUTH_PW'];

$token = random_bytes(25);
$strToken = strval(bin2hex($token));
$adduser = "INSERT INTO `user` (`id`, `usertoken`, `username`, `password`) VALUES (NULL, '{$strToken}', '{$username}' , '{$password}');";

try {
    mysqli_query($db, $adduser);
} catch (Exception $e) {
    die('MySQL Error: ' . $e->getMessage());
}

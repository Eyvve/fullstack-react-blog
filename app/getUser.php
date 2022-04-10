<?php

require './fuckCors.php';
require './dbConnect.php';

$getUsers = "SELECT id, username, password from user";

try {
    $query = mysqli_query($db, $getUsers);

    while ($row = mysqli_fetch_array($query)) {
        $userList[] = $row;
    }
} catch (Exception $e) {
    die('MySQL Error: ' . $e->getMessage());
}

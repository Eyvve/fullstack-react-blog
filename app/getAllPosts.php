<?php

require './dbConnect.php';
require './cors.php';

header('Access-Control-Allow-Origin: http://localhost:3000/');
header('Access-Control-Allow-Headers: authorization');
header('Access-Control-Allow-Credentials: true');

$getallposts = 'SELECT title, content, username FROM post LEFT JOIN user on post.userId = user.id;';


try {
    $query = mysqli_query($db, $getallposts);

    while ($row = mysqli_fetch_array($query)) {
        $postList[] = $row;
    }

    var_dump($postList);
    echo json_encode($postList);
} catch (Exception $e) {
    die('MySQL Error : ' . $e->getMessage());
}

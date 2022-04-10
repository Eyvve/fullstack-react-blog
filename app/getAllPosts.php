<?php

require './fuckCors.php';
require './dbConnect.php';

$getallposts = 'SELECT title, content, username FROM article LEFT JOIN user on article.userId = user.id;';
// $getallposts = 'SELECT * FROM article';


try {
    $query = mysqli_query($db, $getallposts);

    while ($row = mysqli_fetch_array($query)) {
        $postList[] = $row;
    }

    // var_dump($postList);
    echo json_encode($postList);
    // echo json_encode($query);
} catch (Exception $e) {
    die('MySQL Error : ' . $e->getMessage());
}

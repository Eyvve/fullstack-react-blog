<?php

require './fuckCors.php';

require './dbConnect.php';


$title = $_POST['title'];
$content = $_POST['content'];

var_dump($_POST);

$addpost = "INSERT INTO `article` (`id`, `userId`, `title`, `content`) VALUES (NULL, '1', '{$title}', '{$content}');";

try {
    mysqli_query($db, $addpost);
} catch (Exception $e) {
    die('MySQL Error: ' . $e->getMessage());
}

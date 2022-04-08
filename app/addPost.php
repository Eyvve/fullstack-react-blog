<?php


require './dbConnect.php';
require './cors.php';
// require './tokenGenerator.php';
// $strToken = strval(bin2hex($token));


$addpost = "INSERT INTO `post` (`id`, `userId`, `title`, `content`) VALUES (NULL, '1', 'je suis josiane', 'haha je suis une folle ma gueule');";

try {
    mysqli_query($db, $addpost);
} catch (Exception $e) {
    die('MySQL Error: ' . $e->getMessage());
}

<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: authorization');
header('Access-Control-Allow-Credentials: true');

$servername = 'db';
$username = 'root';
$password = 'password';
$database = 'data';

$db = mysqli_connect($servername, $username, $password, $database);

if ($db->connect_error) {
    die("connexion échouée" . $db->connect_error);
} else {
    echo "connexion réussie";
}

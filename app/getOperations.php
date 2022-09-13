<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");



// var_dump($data->screenState);

$pdo = new PDO('mysql:host=localhost:3306;dbname=calculator', 'root', '');
$req = ("SELECT * FROM `calculator9000`");
$stmt = $pdo->query($req);
$operations = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($operations);

// echo phpinfo();




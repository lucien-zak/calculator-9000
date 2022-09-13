<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");



// var_dump($data->screenState);

$pdo = new PDO('mysql:host=localhost:8889;dbname=calculator', 'root', 'root');
$req = ("SELECT * FROM `calculator9000`");
$stmt = $pdo->query($req);
$operations = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($operations);




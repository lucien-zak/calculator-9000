<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$json = file_get_contents('php://input');

$data = json_decode($json);

// var_dump($data->screenState);

$pdo = new PDO('mysql:host=localhost:3306;dbname=calculator', 'root', '');
$req = $pdo->prepare('INSERT INTO `calculator9000`(`operations`, `results`) VALUES (?,?)');
$req->execute([$data->screenState->results,$data->screenState->total]);






<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$json = file_get_contents('php://input');


$data = json_decode($json);

var_dump($data->id);

$pdo = new PDO('mysql:host=localhost:8889;dbname=calculator', 'root', 'root');
$req = $pdo->prepare('DELETE FROM `calculator9000` WHERE `id_calcul` = ?');
$req->execute([$data->id]);




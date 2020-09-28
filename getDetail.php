<?php
include('classes/Db.php');
include('classes/detail.php');

$data = Detail::findById($_GET['id']);

header('Content-Type: application/json');
$json = json_encode($data);
echo $json;
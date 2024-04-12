<?php
// var_dump($_SERVER);

use src\Controllers\HomeController;

$url = $_SERVER['REDIRECT_URL'];
$methode = $_SERVER['REQUEST_METHOD'];

$HomeController = new HomeController;

switch ($url) {
  case '/':
    $HomeController->index();
    break;
  case '/Home':
    $HomeController->Home();
    break;

  default:
    # code...
    break;
}

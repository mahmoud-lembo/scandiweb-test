<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'autoload.php';
include 'Helper.php';
include 'config.php';

$router = new Controller\Router();

$router->get('/products/get', 'Controller\ProductList::show');

$router->post('/products/add', 'Controller\ProductList::add');
$router->post('/products/delete', 'Controller\ProductList::delete');

$router->check();

?>
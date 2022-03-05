<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'autoload.php';
include 'Helper.php';
include 'config.php';

$router = new Router();

$router->get('/products/get', 'ProductList::show');

$router->post('/products/add', 'ProductList::add');
$router->post('/products/delete', 'ProductList::delete');

$router->check();

?>
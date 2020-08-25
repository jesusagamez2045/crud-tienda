<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('Content-Type: application/json');
$server_method = $_SERVER['REQUEST_METHOD'];

switch ($server_method) {
    case 'GET':
        include_once 'product_controller.php';
        $controller = new ProductController();
        $path = (isset($_GET['url'])) ? $_GET['url'] : '';
        switch ($path) {
            case 'products':
                $controller->getActions($path);
                break;
            default:
                http_response_code(404);
                break;
        }
        break;
    case 'POST':
        include_once 'product_controller.php';
        $controller = new ProductController();
        $path = 'products';
        switch ($path) {
            case 'products':
                $product = $_POST;
                $controller->postActions($path, $product);
                break;
            default:
                http_response_code(404);
                break;
        }
        break;
    default:
        http_response_code(404);
        break;
}

?>

<?php

include_once 'apiproducts.php';

class ProductController {

    private $apiProduct;

    public function __construct(){
        $this->apiProduct = new ApiProduct();
    }

    public function getActions(String $path){
        switch ($path) {
            case 'products':
                $this->apiProduct->getAll();
                http_response_code(200);
                break;
            default:
                # code...
                break;
        }
    }

    public function postActions(String $path, $product){
        switch ($path) {
            case 'products':
                $response = $this->apiProduct->insertUpdateProduct($product);
                if($response){
                    http_response_code(200);
                }else{
                    http_response_code(400);
                }
                break;
            default:
                http_response_code(400);
                break;
        }
    }

}

?>
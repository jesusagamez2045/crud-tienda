<?php

include_once 'product.php';


class ApiProduct{

    function getAll(){
        $product = new Product();
        $products = array();
        $result = $product->getProducts();
        if($result->rowCount()){
            $products = $result->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(array('msj' => 'Correcto', 'data' => $products));
        }else{
            echo json_encode(array('msj' => 'No hay elementos registrados'));
        }
    }

    function insertUpdateProduct($products){
        $model = new Product();
        $result = $model->insertUpdateProduct($products);

        return $result;
    }

}


?>
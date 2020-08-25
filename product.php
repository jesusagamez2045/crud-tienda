<?php

include_once 'db.php';

class Product extends DB{

    function getProducts(){
        $query = $this->connect()->query('SELECT * FROM productos');
        return $query;
    }

    function insertUpdateProduct($product){
        try {
            if(isset($product['id'])){
                $sentencia = $this->connect()->prepare("UPDATE productos SET Nombre = :nombre, Codigo = :codigo, precio = :precio, fecha_vencimiento = :fecha_vencimiento, Estado = :estado WHERE ProductoId = :id");
                $sentencia->bindParam(':id', $product['id']);
            }else{
                $sentencia = $this->connect()->prepare("INSERT INTO productos (Nombre, Codigo, precio, fecha_vencimiento, Estado) VALUES (:nombre, :codigo, :precio, :fecha_vencimiento, :estado)");
            }
            $sentencia->bindParam(':nombre', $product['nombre']);
            $sentencia->bindParam(':codigo', $product['codigo']);
            $sentencia->bindParam(':precio', $product['precio']);
            $sentencia->bindParam(':fecha_vencimiento', $product['fecha_vencimiento']);
            $sentencia->bindParam(':estado', $product['estado']);
    
            $sentencia->execute();
            // $sentencia->debugDumpParams();
            return true;
        } catch (\Throwable $th) {
            // var_dump($th);
            return false;
        }
    }

    function deleteProduct($product){

    }

}


?>
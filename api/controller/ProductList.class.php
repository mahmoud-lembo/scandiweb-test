<?php

class ProductList
{

    public static function index(): void
    {        
    }

    public static function show()
    {
        return response((new Main)->getAll());
    }

    public static function add(array $inputs): void 
    {
        $validator = new Validator($inputs);
    }

    public static function delete(array $data)
    {
        foreach ($data as $value) {
            (new Main)->delete('sku', $value);
        }

        return response(array('status' => 'success', 'message' => 'Deleted count of products: '.count($data)));
    }

};
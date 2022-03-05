<?php

abstract class Product extends QueryBuilder
{
    private $table_name = 'products';

    protected $inputs;
    protected $sku;
    protected $name;
    protected $price;
    protected $type;

    function __construct()
    {
        parent::__construct($this->table_name);
    }

    public function find(string $sku)
    {
        return $this->select(['*'])->where('sku', '=', $sku)->get();   
    }

    public function save()
    {
        return $this->insert(array($this->id ,$this->sku, $this->name, $this->image,$this->price, $this->type, $this->attribute));
    }

    public function validateSKU()
    {
        return (!preg_match('/\s/', $this->inputs['sku']) && !$this->find($this->inputs['sku']) && (strlen($this->inputs['sku']) > 0));
    }

    public function validateName()
    {
        return (strlen($this->inputs['name']) > 0);
    }

    public function validatePrice()
    {
        return !(filter_var($this->inputs['price'], FILTER_VALIDATE_FLOAT) && (strlen($this->inputs['price']) > 0) && floatval($this->inputs['price'] >= 0));
    }

    public function validateType()
    {
        return !(preg_match('/^[A-Za-z]+$/', $this->inputs['type']) && (strlen($this->inputs['type']) > 0));
    }
    
    public function validateAttributes()
    {
    return (preg_match('/Dimension: [0-9]+x[0-9]+x[0-9]+ CM|Weight: [0-9]+ KG|Size: [0-9]+ MB/', $this->attribute));
    }

};


<?php

class Product extends QueryBuilder
{
    private $table_name = 'products';

    protected $inputs;

    //protected $id;
    protected $sku;
    protected $name;
    //protected $image;
    protected $price;
    protected $type;

    function __construct()
    {
        parent::__construct($this->table_name);
    }

    public function getArray(): array
    {
        return array($this->id ,$this->sku, $this->name, $this->image, $this->price, $this->type, $this->attribute);
    }

    public function find(string $sku)
    {
        return $this->select(['*'])->where('sku', '=', $sku)->get();   
    }

    public function save()
    {
        return $this->insert(array($this->id ,$this->sku, $this->name, $this->image,$this->price, $this->type, $this->attribute));
    }

    public function getAll()
    {
        return $this->select(['*'])->get();
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

};


<?php

class Book extends Product implements Validate
{
    protected $inputs;

    function __construct(array $inputs)
    {
        parent::__construct();
        $this->inputs = $inputs;

        $this->id = 0;
        $this->sku = $inputs['sku'];
        $this->name = $inputs['name'];
        $this->image = $inputs['image'];
        $this->price = $inputs['price'];
        $this->type = $inputs['type'];
        
    }

    public function validateAttributes()
    {
        if(is_numeric($this->inputs['weight']) && floatval($this->inputs['weight'] >= 0))
        {
            $this->attribute = 'Weight: '.$this->inputs['weight'].' KG';
            return true;
        }

        return false;
    }
};
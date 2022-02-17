<?php

class DVD extends Product implements Validate
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
        if(is_numeric($this->inputs['size']) && floatval($this->inputs['size'] >= 0))
        {
            $this->attribute = 'Size: '.$this->inputs['size'].' MB';
            return true;
        }

        return false;
    }
};
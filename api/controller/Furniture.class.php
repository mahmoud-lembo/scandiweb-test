<?php

class Furniture extends Product implements Validate
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
        $this->attribute = 'Dimension: '.$this->inputs['height'].'x'.$this->inputs['width'].'x'.$this->inputs['length'];
    }

};
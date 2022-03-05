<?php
namespace Controller;
class Main extends Product
{
    public function getAll()
    {
        return $this->select(['*'])->get();
    }
    public function getArray(): array
    {
        return array($this->id ,$this->sku, $this->name, $this->image, $this->price, $this->type, $this->attribute);
    }
};
<?php
namespace Controller;
class Validator
{
    private $inputs;
    private $message = null;

    function __construct(array $inputs)
    {
        $this->inputs = $inputs;
        $productClass = "Controller\\".$this->inputs['type'];
        $this->validate(new $productClass($this->inputs));
    }

    public function validate(Validate $validate)
    {
        if(!$validate->validateSKU())
            $this->message .= 'Invalid SKU or already exists';
        if(!$validate->validateName())
            $this->message .= 'Invalid name';
        if($validate->validatePrice())
            $this->message .= 'Invalid price';
        if($validate->validateType())
            $this->message .= 'Invalid type';
        if(!$validate->validateAttributes())
            $this->message .= 'Invalid attributes';

        if($this->message == null)
        {
            $validate->save();
            return response(array('status' => 'success', 'message' => 'Product added to the database'));
        }   
        
        return [http_response_code(409),response(array('status' => 'error', 'message' => $this->message))];
    }
};

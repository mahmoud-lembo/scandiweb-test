<?php

include 'controller/Helper.php';

function autoload($class_name) 
{

    $paths = array(
        'controller/', 
        'model/'
    );

    foreach($paths as $path)
    {
        $file = sprintf('%s/%s.class.php', $path, $class_name);
        if(is_file($file)) 
        {
            include $file;
        } 

    }
}

spl_autoload_register('autoload');
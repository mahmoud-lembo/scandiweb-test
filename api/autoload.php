<?php

spl_autoload_register(function ($class)
{

    $paths = array(
        'controller/', 
        'model/'
    );
    
    $parts = explode('\\', $class);
    foreach($paths as $path)
    {
        $file = sprintf('%s/%s.class.php', $path, end($parts));
        if(is_file($file)) 
        {
            include $file;
        } 

    }
});